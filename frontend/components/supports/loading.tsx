import React from 'react'

export const Loading = (props: any) => {
    return (
        <>
            {props.loading &&
                <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 block m-auto" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <defs>
                            <filter id="ldio-2kvnchlnv79-filter" x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2.4000000000000004" />
                                <feComponentTransfer result="cutoff">
                                    <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1" />
                                </feComponentTransfer>
                            </filter>
                        </defs>
                        <g filter="url(#ldio-2kvnchlnv79-filter)">
                            <g transform="translate(50 50)">
                                <g>
                                    <circle cx="17" cy="0" r="5" fill="#e15b64">
                                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="4s" repeatCount="indefinite" begin="-0.25s" />
                                    </circle>
                                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="4s" repeatCount="indefinite" begin="0s" />
                                </g>
                            </g>
                            <g transform="translate(50 50)">
                                <g>
                                    <circle cx="17" cy="0" r="5" fill="#f47e60">
                                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="2s" repeatCount="indefinite" begin="-0.2s" />
                                    </circle>
                                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2s" repeatCount="indefinite" begin="-0.05s" />
                                </g>
                            </g>
                            <g transform="translate(50 50)">
                                <g>
                                    <circle cx="17" cy="0" r="5" fill="#f8b26a">
                                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.15s" />
                                    </circle>
                                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.3333333333333333s" repeatCount="indefinite" begin="-0.1s" />
                                </g>
                            </g>
                            <g transform="translate(50 50)">
                                <g>
                                    <circle cx="17" cy="0" r="5" fill="#abbd81">
                                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="1s" repeatCount="indefinite" begin="-0.1s" />
                                    </circle>
                                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1s" repeatCount="indefinite" begin="-0.15s" />
                                </g>
                            </g>
                            <g transform="translate(50 50)">
                                <g>
                                    <circle cx="17" cy="0" r="5" fill="#849b87">
                                        <animate attributeName="r" keyTimes="0;0.5;1" values="3.5999999999999996;8.399999999999999;3.5999999999999996" dur="0.8s" repeatCount="indefinite" begin="-0.05s" />
                                    </circle>
                                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.8s" repeatCount="indefinite" begin="-0.2s" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>}
        </>
    )
}
