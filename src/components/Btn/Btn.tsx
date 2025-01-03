"use client"

const Btn = ({text, icon}: {text: string, icon?: any} ) => {
    return (
        <button className="text-[#fff] text-[2.5vh] font-bold  bg-[var(--btn-color)] px-2 py-1 rounded-md hover:bg-[var(--text-color-primary)] transition-colors flex gap-2 items-center border-2 border-[var(--btn-border)]">
            {icon} {text}
        </button>
    )
}

export default Btn;
