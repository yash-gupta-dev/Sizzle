"use client"

import { SizzleCertifiedIcon } from "@/assets/icons"

function GradientSemiBorder() {
    return (
        <div className="absolute inset-0 m-3.75">
            <svg
                width="283"
                height="430"
                viewBox="0 0 283 430"
                fill="none"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M282 429.727V11.0002C282 5.47731 277.523 1.00015 272 1.00015H11C5.47715 1.00015 1 5.4773 1 11.0002V351"
                    stroke="url(#paint0_linear_1_1732)"
                    strokeWidth="2"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_1732"
                        x1="273.5"
                        y1="1.00049"
                        x2="108"
                        y2="339.501"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#D9107F" />
                        <stop offset="0.293269" stopColor="#EE1E03" />
                        <stop offset="0.572115" stopColor="#F61785" />
                        <stop offset="0.833836" stopColor="#FC7C20" />
                        <stop offset="1" stopColor="#FC7C20" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="relative rounded-2xl p-3.75">
                <SizzleCertifiedIcon className="w-15.5 h-9.25"/>
            </div>
        </div>
    )
}

export default GradientSemiBorder