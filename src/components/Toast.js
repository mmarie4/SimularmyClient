const Toast = (props) => {
    if (!props.content)
        return <div></div>

    return (
        <div class="fixed bottom-8 right-4 rounded bg-red-600 opacity-75 text-sm px-4 py-2 text-gray-200">
            {props.content}
        </div>
    )
}

export default Toast;