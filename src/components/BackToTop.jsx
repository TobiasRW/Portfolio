

export default function BackToTop() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="back-to-top" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    )
}