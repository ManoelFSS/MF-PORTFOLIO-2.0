

const Btn = ({text, icon}: {text: string, icon?: any} ) => {
    return (
        <button className="text-[#fff] font-bold text-[2.2vh] sm:text-[ 2.5vh] bg-[var(--btn-color)] px-3 py-2.5 rounded hover:bg-[var(--text-color-primary)] transition-colors flex gap-2 items-center border-2 border-[var(--btn-border)]">{icon} {text}</button>
    )
}

export default Btn;
