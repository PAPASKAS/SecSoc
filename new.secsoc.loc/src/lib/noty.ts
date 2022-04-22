import Noty from 'noty'


type messageType = "alert" | "success" | "warning" | "error" | "info" | "information";


const noty = (text: string, type: messageType, err?: boolean) => {
    new Noty({
        text,
        type,
        layout: "bottomRight",
        theme: "nest"
    }).show()

    if (err)
        throw text
};

export default noty;
