import React from 'react'
import chai from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import { Display } from './Display.jsx'

const expect = chai.expect

describe('Display Component', () => {
  const errorHandlerSpy = sinon.spy()
  const fetchJokesSpy = sinon.spy()
  let initProps = {
    classes: {},
    joke: '',
    loading: false,
    errorHandler: errorHandlerSpy,
    fetchJokes: fetchJokesSpy
  }

  let wrapper

  beforeEach((done) => {
    wrapper = shallow(<Display {...initProps} />)
    done()
  })

  it('should display a joke when a joke is available', () => {
    const propsWithJoke = {
      ...initProps,
      joke: 'New Joke!'
    }

    wrapper.setProps(propsWithJoke)
    expect(wrapper.find('#joke-box').props().children).to.equal('New Joke!')
  })
})
