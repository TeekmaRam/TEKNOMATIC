
//here we using imagePicker library to upload image and video 
//for video we using video library to showing video 
import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

export const ImageuploadScreen = (props) => {

    let videos = useRef(null)
    const [imageupload, setImageupload] = useState({})
    const [videoupload, setVideoupload] = useState({})
    const [image, setImage] = useState(false)
    const [video, setVodeo] = useState(false)
    const [isbuffering, setIsbuffering] = useState(false)

    const onBuffer = () => {
        setIsbuffering(true)
    }
    const _startC = () => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
                (response) => {
                    if (response) {
                        _startCamera();
                    } else {
                        requestCameraPermission((flag) => {
                            if (flag) {
                                _startCamera();
                            }
                        });
                    }
                },
            );
        } else {
            _startCamera();
        }

    };

    const _startd = () => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
                (response) => {
                    if (response) {
                        _startVideorecording();
                    } else {
                        requestCameraPermission((flag) => {
                            if (flag) {
                                _startVideorecording();
                            }
                        });
                    }
                },
            );
        } else {
            _startVideorecording();
        }

    };

    const _startCamera = () => {
        ImagePicker.openCamera({
            width: 250,
            height: 500,
            cropping: true,
            includeBase64: true,
            compressImageQuality: 1,
        })
            .then((image) => {
                image.value = 'data:image/png;base64,' + image.data;
                setImageupload(image.value)
                setImage(true)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const _startVideorecording = () => {
        ImagePicker.openCamera({
            mediaType: 'video',
        })
            .then((image) => {
                console.log(image)
                setVideoupload(image)
                setVodeo(true)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={Styles.container}>
            <View
                style={Styles.viewContainer}>
                {image ?
                    <Image
                        style={Styles.docContainer}
                        imageStyle={{ borderRadius: 10 }}
                        source={{
                            uri: imageupload && imageupload ? imageupload : '',
                        }} />
                    : null}
            </View>

            <TouchableOpacity style={Styles.Imagebutton} onPress={() => _startC()}>
                <Text>Capture Image</Text>
            </TouchableOpacity>

            <View style={Styles.viewContainer}>
                {video ?
                    <Video
                        source={{ uri: videoupload.path }}
                        videos={videos}
                        onBuffer={onBuffer}
                        style={Styles.backgroundVideo} />
                    : null}
            </View>

            <TouchableOpacity style={Styles.Imagebutton} onPress={() => _startd()}>
                <Text>Upload Video</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    IamgeView: {
        // flex: 1,
        width: '80%',
        height: "40%",
        marginLeft: 20,
        borderWidth: 1,
        borderColor: "black"
    },
    Imagebutton: {
        //flex: 0,
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    viewContainer: {
        flex: 0,
        height: '30%',
        width: '90%',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    docContainer: {
        flex: 1,
    },
    backgroundVideo: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
