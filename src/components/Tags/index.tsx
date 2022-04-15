import React, { useState } from 'react'

import * as S from './styles'

type TextFieldProps = {
  brewery_type: string | null
  postal_code: string | null
  phone: string | null
}

const Tags = ({ brewery_type, postal_code, phone }: TextFieldProps) => {
  const [addMore, setAddMore] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [addedText, setAddedText] = useState<string>('')

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setAddMore(false)
      setAddedText(inputValue)
    }
  }

  const handleAddMoreClick = () => {
    if (!addMore) {
      return setAddMore(true)
    }
    setAddMore(false)
    setAddedText(inputValue)
  }

  const TextFieldProps = {
    type: 'text',
    name: 'newTag',
    value: inputValue,
    onChange: handleOnChange,
    onKeyPress: handleEnterKey,
    isAddMore: addMore,
  }

  return (
    <S.TagSection>
      {brewery_type && (
        <S.TagWrapper>
          <S.Image src="/assets/brewery_type.svg" alt="Brewery Type Icon" />
          <S.Text>{brewery_type}</S.Text>
        </S.TagWrapper>
      )}
      {postal_code && (
        <S.TagWrapper>
          <S.Image src="/assets/postal_code.svg" alt="Postal Code Icon" />
          <S.Text>{postal_code}</S.Text>
        </S.TagWrapper>
      )}
      {phone && (
        <S.TagWrapper>
          <S.Image src="/assets/phone.svg" alt="Phone Icon" />
          <S.Text>{phone}</S.Text>
        </S.TagWrapper>
      )}
      <S.TagWrapper>
        <S.DynamicImage
          src={addMore ? '/assets/checked.svg' : '/assets/add_more.svg'}
          alt="Icon"
          hasValue={addedText}
          onClick={handleAddMoreClick}
        />
        <S.Text>{!inputValue && !addMore ? 'add more' : addedText}</S.Text>
        <S.Input {...TextFieldProps} />
      </S.TagWrapper>
    </S.TagSection>
  )
}

export default Tags
