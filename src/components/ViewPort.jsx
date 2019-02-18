import React from 'react'
import handleViewport from 'react-in-viewport'

const Frame = (props: { inViewport: boolean }) => {
  const { innerRef } = props
  return <div className="viewport-frame" ref={innerRef} />
}

const ViewportFrame = handleViewport(Frame)

const Component = (props) => {
  const { children } = props
  const [show, setShow] = React.useState(false)
  return (
    <React.Fragment>
      <ViewportFrame onEnterViewport={() => setShow(true)} onLeaveViewport={() => setShow(false)} />
      {React.cloneElement(children || <div />, { show })}
    </React.Fragment>
  )
}

export default Component