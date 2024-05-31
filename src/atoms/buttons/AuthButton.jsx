import React from 'react';

function AuthButton({label, onClick}) {
    return (
        <>
            <button className="bg-[#354F52] py-2 rounded-xl text-white hover:scale-105 duration-300 text-center" onClick={onClick}>{label}</button>
        </>
    );
}

export default AuthButton;