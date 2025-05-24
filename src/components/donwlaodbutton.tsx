"use client";
import React from 'react';

interface DownloadButtonProps {
    href: string;
    filename: string;
    text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, filename, text }) => {
    const handleDownload = () => {
        const fileUrl = href; // Adjust the file path relative to the public folder
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = filename; // This name will be used for the downloaded file
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return <button   className="text-rose-600 underline" onClick={handleDownload}>{text}</button>;
};

export default DownloadButton;
