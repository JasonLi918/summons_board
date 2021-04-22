export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2617',
  			'Image':'https://imgur.com/agpcnJK.jpg',
  			'Name_tc':'深翔帝',
  			'Name_jp':'深渦帝獣・エイルヴュラー',
  			'hp':'13824',
  			'Atk_before':'341x3(4)回',
  			'Atk_after':'391x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','防禦type'],
  			'Characteristic_Before':['飛行','愛心UP'],
  			'Characteristic_After':['飛行','愛心UP','全體化'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"二代水限"
  		}
  	)
}