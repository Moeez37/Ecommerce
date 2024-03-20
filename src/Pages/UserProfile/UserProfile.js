import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'

import Input from '../../Custom/customComponents/InputRef';
import { ValidateUserInfoField } from "../../util/utils"

function UserProfile(props) {
    const [UserInfo, setUserInfo] = useState({});
    const [editing, setEditing] = useState(false);
    const [disableInputFields, setDisableInputFields] = useState(true)
    const fullname = useRef();
    const email = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const streetAdd = useRef();
    const city = useRef();
    const state = useRef();
    const zipCode = useRef();
    const latitude = useRef();
    const logitude = useRef();
    const phoneNo = useRef();

    useEffect(() => {
        try {
            const res = fetch("https://fakestoreapi.com/users", {
                method: "post",
                body: UserInfo
            }).then((res) => {
                return res.json()

            }).then(data => {
                console.log(data)
            })
        }
        catch (error) {
            console.error(error);
        }
    }, [UserInfo])


    function handleSaveClick(event) {
        event.preventDefault();
        const UserObject = {
            fullname: fullname,
            email: email,
            firstName: firstName,
            lastName: lastName,
            streetAdd: streetAdd,
            city: city,
            state: state,
            zipCode: zipCode,
            latitude: latitude,
            phone: phoneNo,
        }
        const res = ValidateUserInfoField(UserObject);
        if (res.isValid) {
            setEditing(false);
            setDisableInputFields(true)
            setUserInfo(prevState => { return { ...prevState, ...res.userData } })
        }
        else {
            console.log("no updated !")
        }
    }
    function handleEditClick() {
        setEditing(true);
        setDisableInputFields(false);
        // for button to be show in form
    }
    function handleCancelClick() {
        setEditing(false);
        setDisableInputFields(true);
    }
    return (
        <div className='container flex flex-col items-center justify-center mx-auto max-w-md px-8 py-8 bg-gray-100 rounded-lg shadow-md'>
            <form className='w-full'>
                <div className='mb-6'>
                    <label htmlFor="overView" className='block text-lg font-semibold mb-2'>Overview</label>
                    <div id="overView" className='flex flex-wrap'>
                        <Input ref={fullname} placeholder="Full Name" className='w-full mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <Input ref={email} placeholder="Email" className='w-full mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="name" className='block text-lg font-semibold mb-2'>Name</label>
                    <div id="name" className='flex flex-wrap'>
                        <Input ref={firstName} placeholder="First Name" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <Input ref={lastName} placeholder="Last Name" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="Address" className='block text-lg font-semibold mb-2'>Address</label>
                    <div id="Address" className='flex flex-wrap'>
                        <Input ref={streetAdd} placeholder="Street Address" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <Input ref={city} placeholder="City" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <Input ref={state} placeholder="State" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <Input ref={zipCode} placeholder="Zipcode" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                        <div>
                            <label htmlFor="geolocation" className='block text-lg font-semibold mb-2'>Geolocation</label>
                            <div id="geolocation" className='flex flex-wrap'>
                                <Input ref={latitude} placeholder="Latitude" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                                <Input ref={logitude} placeholder="Longitude" className='w-full md:w-1/2 mb-2 px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="Phone" className='block text-lg font-semibold mb-2'>Phone</label>
                    <Input ref={phoneNo} placeholder="Phone Number" className='w-full px-4 py-3 border rounded shadow-sm' disabled={disableInputFields} />
                </div>
                <div className='mb-6 flex justify-between'>
                    {editing ? (
                        <button type="button" onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
                    ) : (
                        <button type="button" onClick={handleEditClick} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Edit</button>
                    )}
                    <button type="submit" onClick={handleCancelClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Cancel</button>
                </div>
            </form>
        </div>
    );
    UserProfile.propTypes = {
        email: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        name: PropTypes.shape({
            firstname: PropTypes.string,
            lastname: PropTypes.string
        }).isRequired,
        address: PropTypes.shape({
            city: PropTypes.string,
            street: PropTypes.string,
            number: PropTypes.string,
            zipcode: PropTypes.string,
            geolocation: PropTypes.shape({
                lat: PropTypes.string,
                long: PropTypes.string,
            }).isRequired
        }).isRequired,
        phone: PropTypes.string,

    }
}
export default UserProfile;
