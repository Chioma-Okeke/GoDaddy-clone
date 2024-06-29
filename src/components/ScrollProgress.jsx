import React from "react";

function ScrollProgress() {
    const [srollProgress, setScrollProgress] = React.useState(5)

    const divStyle = {
        width: `${srollProgress}%`
    }

    React.useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollY = window.scrollY

            const scrollPercentage = (scrollY / (documentHeight - windowHeight) * 100)
            setScrollProgress(scrollPercentage)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="bg-[#afafaf] w-full h-3 z-50 sticky top-0 left-0 right-0">
            <div className={`bg-[#61edea] h-full`} style={divStyle}></div>
        </div>
    );
}

export default ScrollProgress;
