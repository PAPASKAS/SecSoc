import Noty from 'noty';

type MessageType = 'alert' | 'success' | 'warning' | 'error' | 'info' | 'information';

const noty = (text: string, type: MessageType, err?: boolean) => {
  new Noty({
    text,
    type,
    layout: 'bottomRight',
    theme: 'nest',
  }).show();

  if (err) throw Error(text);
};

export default noty;
