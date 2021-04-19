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
				<table>
					<tbody>
						<tr>
							<td colspan="2">Title</td>
						</tr>
						<tr>
							<td>棋寵編號</td>
							<td>{this.state.data.Number}</td>
						</tr>
						<tr>
							<td colspan="2">
								<img src={this.state.data.Image}/>
							</td>
						</tr>
						<tr>
							<td>中文名稱</td>
							<td>{this.state.data.Name_tc}</td>
						</tr>
						<tr>
							<td>日文名稱</td>
							<td>{this.state.data.Name_jp}</td>
						</tr>
					</tbody>
				</table>
				<Link href='/'>
					<a>
						<button>Back to Home Page</button>
					</a>
				</Link>
				<style jsx>{`
				table{
					margin-bottom:20px;
				}

				td{
					border:1px solid #ffffff;
					text-align:center;
					padding:5px;
				}
				`}
				</style>
			</div>
		)
	}

}

export default Post
