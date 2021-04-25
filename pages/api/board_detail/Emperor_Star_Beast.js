export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3261',
  			'Image':'https://imgur.com/iy8cLx8.jpg',
  			'Name_tc':'帝天星獸',
  			'Name_jp':'帝天星神獣ヘリオスフィア',
  			'hp':'15549',
  			'Atk_before':'398x3(4)回',
  			'Atk_after':'463x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['飛行','全體化'],
  			'Characteristic_After':['飛行','全體化','對空攻擊 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'攻擊回數增加(+2)',
  			'Comment':"帝天星獸"
  		}
  	)
}