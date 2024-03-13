import React from "react";

function TeamCard({ name, position, image, showPhone, showLinkedin, showGoogleMeet }) {
    return (
        <div className="flex flex-col items-center w-96 h-501 gap-6">
            <div className="w-full h-96 rounded-3xl p-2 bg-gradient-border-blue">
                <img src={image} alt={name} className=" rounded-3xl" />
            </div>

            <div className="flex flex-col w-full h-93 gap-3">
                <div>
                    <h4 className="text-20 font-w-bold text-var-dark-blue">{name}</h4>
                    <p className="text-18">{position}</p>
                </div>
                <div className="flex items-center gap-1">
                    {showPhone && (
                        <figure>
                            <div className="w-6 h-6 p-1 bg-var-dark-blue">
                                <img
                                    src="/assets/icons/phone.webp"
                                    alt="Phone"
                                    className="w-full h-full"
                                />
                            </div>
                        </figure>
                    )}
                    {showLinkedin && (
                        <figure>
                            <img
                                src="/assets/icons/linkedin-2.webp"
                                alt="Linkedin"
                                className="w-6 h-6"
                            />
                        </figure>
                    )}
                    {showGoogleMeet && (
                        <figure>
                            <img
                                src="/assets/icons/meet.webp"
                                alt="Google Meet"
                                className="h-6"
                            />
                        </figure>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
