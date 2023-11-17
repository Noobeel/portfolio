export default function Resume() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <iframe
                id="resume"
                title="Resume"
                src="/Nabeel-Resume.pdf"
                className="mt-10 rounded-lg w-5/6 h-5/6 lg:w-4/6"
            />
        </div>
    );
}
