import React from 'react'

export default function preloder() {
    return (
        <div className="preloader">
            <div className="center">
                <div className="spinner">
                    <div className="blob top" />
                    <div className="blob bottom" />
                    <div className="blob left" />
                    <div className="blob move-blob" />
                </div>
            </div>
        </div>
    )
}
