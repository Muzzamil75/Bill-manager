import * as yup from 'yup'
import { Formik } from 'formik'
import * as React from 'react'
import { Fragment } from 'react';
import { TextInput, Text, SafeAreaView, Button, Alert, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './home'
import { withRouter } from 'react-router-native'


class Form extends React.Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            id: "",

        }
    };

    handleInputs(name, password, email) {

        this.setState({ name: name })
        this.setState({ password: password })
        this.setState({ email: email })
        alert("Submitted");

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Formik
                    initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}

                    onSubmit={values => Alert.alert(JSON.stringify(values))}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email()
                            .required("Email is required"),
                        
                        name: yup
                            .string()
                            .required("Name is required"),

                        password: yup
                            .string()
                            .min(6)
                            .required("Password is required"),

                        confirmPassword: yup
                            .string()
                            .min(6)
                            .oneOf([yup.ref('password', null)], ' Password must be matched')
                            .required('Confirm Password is required'),

                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <Fragment>

                            <View style={styles.header}>
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginLeft: 30, marginTop: 20 }}>Login Form</Text>

                            </View>
                            <View style ={{marginLeft:20 , marginRight:20}}>


                                <TextInput style={{

                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: "black",
                                    marginBottom: 3,
                                    marginTop: 30,

                                }}
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    placeholder="Name"
                                    onBlur={() => setFieldTouched('name')}
                                    secureTextEntry={true}
                                />

                                {touched.name && errors.name &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                                }

                                {/* email */}
                                <TextInput style={{
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: "black",
                                    marginBottom: 3,
                                    marginTop: 10,

                                }}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                    placeholder="E-mail"
                                />

                                {touched.email && errors.email &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                }

                                {/* passwrd  */}
                                <TextInput style={{
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: "black",
                                    marginTop: 10,

                                }}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    placeholder="Password"
                                    onBlur={() => setFieldTouched('password')}
                                    secureTextEntry={true}
                                />

                                {touched.password && errors.password &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                }
                                {/* retype paswrd */}
                                <TextInput style={{
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: "black",
                                    marginBottom: 3,
                                    marginTop: 10,
                                }}
                                    value={values.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    placeholder="Retype-Password"
                                    onBlur={() => setFieldTouched('button')}
                                    secureTextEntry={true}
                                />

                                

                                
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmPassword}</Text>
                                    
                                

                                <View style={{ width: 80, height: 40, marginLeft: 130, marginTop: 35 }}>
                                    <Button
                                        title='Login'
                                        onPress={() => { this.handleInputs(values.name, values.password, values.email) }}
                                        color="blue"
                                    />
                                </View>

                                <View style={{ width: 80, height: 40, marginLeft: 130, marginTop: 35 }}>
                                    <Button
                                        title='Home page'
                                        onPress={() => this.props.history.push("/home")}
                                        color="blue"
                                    />
                                </View>
                               
                                
                            </View>
                        </Fragment>
                    )}
                </Formik>
            </SafeAreaView>

        );

    }
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 24,
        
    }, header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 70,
        width: 360,
        backgroundColor: '#4286f4',
    },
});

export default withRouter(Form);