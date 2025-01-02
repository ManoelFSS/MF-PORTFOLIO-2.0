"use client"

const Btn = ({text, icon}: {text: string, icon?: any} ) => {
    return (
        <button className="text-[#fff] 1xl:text-[1.6vh] font-bold  bg-[var(--btn-color)] px-2 py-2.5 rounded hover:bg-[var(--text-color-primary)] transition-colors flex gap-2 items-center border-2 border-[var(--btn-border)]">
            {icon} {text}
        </button>
    )
}

export default Btn;
