import React from 'react';

export default function Footer() {
    return (
        <footer
            style={{
                marginTop: "1rem",
                backgroundColor: "#b8b0b0",
                position: "fixed",
                bottom: "0",
                left: "0",
                width: "100%",
                textAlign: "center",
                height: "30px",
                zIndex: "10"
            }}
        >
            <p><small>Copyright @ 2021. All rights reserved</small></p>
        </footer>
    );
};