import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router'

function Post(){
  const router = useRouter()
  const { boardname } = router.query;

  return <DetailInfo post={ boardname }/>
}

class DetailInfo extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}

	componentDidMount(){
	   this.ajaxgetData();
	}

	ajaxgetData(){
		if(this.props.post == undefined){
			setTimeout(()=>{
				this.ajaxgetData()
			},500)
		}else{
			fetch(`/api/board_detail/${this.props.post}`)
			     .then(res => res.json())
			     .then(
			       (result) => {
			         this.setState({
			          data:result
			         })
			       },
			       (error) => {

			       }
			)
		}
	}

	render(){
		return(
			<div>
				{this.state.data.full_name}<br/>
				{this.state.data.short_name}<br/>
				{this.state.data.image_A}<br/>
			</div>
		)
	}

}

export default Post
