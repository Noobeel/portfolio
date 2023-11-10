import Script from 'next/script'
import { useEffect } from 'react';

export default function Resume() {
    
    return (
        <>
            {process.env.NODE_ENV === 'development' ? (
                <div className="w-screen h-screen flex justify-center items-center">
                    <iframe id="resume" title="Resume" src='/Nabeel-Resume.pdf' className="w-[80%] h-[80%] mt-10 rounded-lg" />
                </div>
            ) : (
                <div className="w-screen h-screen flex justify-center items-center" >
                    <div id="adobe-dc-view" className="w-[80%] h-[80%] mt-10 rounded-lg" />

                    <Script src="https://documentcloud.adobe.com/view-sdk/main.js" />
                    <Script type="text/javascript" id="adobe-dc-view-config">
                        {`
                            document.addEventListener('adobe_dc_view_sdk.ready', function () {
                                var adobeDCView = new AdobeDC.View({
                                    clientId: '7a7a63626a794636b17711cbcd62a191',
                                    divId: 'adobe-dc-view',
                                });
                                adobeDCView.previewFile(
                                    {
                                        content: { location: { url: '/Nabeel-Resume.pdf' } },
                                        metaData: { fileName: 'Nabeel-Resume.pdf' },
                                    },
                                    {
                                        embedMode: 'SIZED_CONTAINER',
                                    }
                                );
                            });
                        `}
                    </Script>
                </div>
            )}
        </>
    );
}