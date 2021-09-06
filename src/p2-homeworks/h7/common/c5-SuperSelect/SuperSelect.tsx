import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions = options?.map((item, index) => {
      return(
        <option key={index}>{item}</option>
      )
    }); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChangeOption) {
        if (options) {
          onChangeOption(options[options.indexOf(e.currentTarget.value)]);
        }
      }

    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
