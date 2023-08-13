import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import './styles.scss'
import { CaretDown } from '@phosphor-icons/react'
import Image from 'next/image'
import Image404Png from '@/assets/404.png'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import { Change } from '../Change'

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header className="accordion__header">
      <Accordion.Trigger
        className="accordion__trigger"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <CaretDown size={16} />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)

const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content
      className="accordion__content"
      {...props}
      ref={forwardedRef}
    >
      <div className="accordion__content-text">{children}</div>
    </Accordion.Content>
  ),
)

AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'

export const AccordionDemo = ({ cryptos }) => (
  <Accordion.Root className="accordion__root" collapsible>
    {cryptos.map((crypto) => (
      <Accordion.Item
        className="accordion__item"
        value={crypto.code}
        key={crypto.code}
      >
        <AccordionTrigger>
          <span className="home-table__td">
            <Image
              src={crypto.imageUrl || Image404Png}
              alt={crypto.code}
              width={24}
              height={24}
              className="home-table__image"
            />
            {crypto.name}{' '}
            <span className="home-table__acronym">{crypto.code}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="home-table__row">
            <span className="small__label">Price</span>
            <span className="regular__label">
              {convertNumberToUsd(crypto.priceUsd)}
            </span>
          </p>
          <p className="home-table__row">
            <span className="small__label">Change</span>
            <span className="regular__label">
              <Change value={crypto.change} percentage />
            </span>
          </p>
        </AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
)
