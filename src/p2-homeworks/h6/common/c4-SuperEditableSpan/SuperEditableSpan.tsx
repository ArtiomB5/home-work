import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState
} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string

  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
  {
    autoFocus, // игнорировать изменение этого пропса
    onBlur,
    onEnter,
    spanProps,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}
  const [editMsg, setEditMsg] = useState(false);

  const onEnterCallback = () => {
    // setEditMode() // выключить editMode при нажатии Enter
    setEditMode(false);
    onEnter && onEnter()
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    // setEditMode() // выключить editMode при нажатии за пределами инпута
    setEditMode(false);
    onBlur && onBlur(e)
  }
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // setEditMode() // включить editMode при двойном клике
    setEditMode(true);
    onDoubleClick && onDoubleClick(e);
  }

  const spanStyle = {
    margin: '15px 80px 15px 15px',
    borderBottom: '1px solid #2f2d25'
  }

  const spanClassName = `${'x'} ${className}`

  const mouseOverHandler = () => {
    setEditMsg(true);
  }

  const mouseLeaveHandler = () => {
    setEditMsg(false)
  }

  const SpanInputInfo = () => {
    return (
      <span>
              <span onMouseOver={mouseOverHandler}
                    onMouseLeave={mouseLeaveHandler}
              >
                💡
            </span>
        {editMode ?
          <span>{editMsg ? 'To complete the text input, press the Enter key or click in an empty place on the page.' : ''}</span>
          :
          <span>{editMsg ? 'Double-click to change the text.' : ''}</span>
        }

      </span>
    )
  }

  return (
    <>
      <span>
        {editMode
          ? (
            <SuperInputText
              autoFocus // пропсу с булевым значением не обязательно указывать true
              onBlur={onBlurCallback}
              onEnter={onEnterCallback}

              {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
          ) : (
            <span
              onDoubleClick={onDoubleClickCallBack}
              className={spanClassName}
              style={spanStyle}
              {...restSpanProps}
            >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
              {children || restProps.value}
            </span>
          )
        }
      </span>
      <SpanInputInfo/>
    </>
  )
};

export default SuperEditableSpan
