export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2407',
  			'Image':'https://i.imgur.com/oiomKai.jpg',
  			'Name_tc':'水真姬',
  			'Name_jp':'聖遺解放セレッサ',
  			'hp':'14647',
  			'Atk_before':'299x3(4)回',
  			'Atk_after':'369x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['全體化','貫通 Lv3'],
  			'Characteristic_After':['全體化','愛心UP','貫通 Lv3'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"水真姬"
  		}
  	)
}