import React from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';

export class DBToast extends React.Component<any, any> {
  render() {
    return (
      <>
        {`${this.props.numberMoviesAffected === 0 ? "" :
        <Toast
        style={{
          position: 'absolute',
          top: '4em',
          right: '4em',
        }}
        >
          <ToastHeader style={{backgroundColor:this.props.color}}>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{`${this.props.action} ${this.props.numberMoviesAffected} movie/s from list`}</strong>
            {/* <small>just now</small> */}
          </ToastHeader>
          <ToastBody>{`Movies in Current List: ${this.props.moviesLength}`}</ToastBody>
        </Toast>
        }`}
      </>
    )
  }
}