export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3013',
  			'Image':'https://i.imgur.com/dzCkg60.jpg',
  			'Name_tc':'暗天魔',
  			'Name_jp':'幽命天魔エウノミア',
  			'hp':'24200',
  			'Atk_before':'212x3(4)回',
  			'Atk_after':'298x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','強襲type'],
  			'Characteristic_Before':['飛行','全體化'],
  			'Characteristic_After':['飛行','全體化','道具吸收 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"暗天魔"
  		}
  	)
}