import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter()
  const { boardname } = router.query

}

class DetailInfo extends React.Component{
	constructor(){
		super();
		this.state = {
			target:''
		}	
	}

	render(){
		return(
		  	<p>Post:  </p>
		)
	}
}

export default DetailInfo