export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3181',
  			'Image':'https://i.imgur.com/00UVobJ.jpg',
  			'Name_tc':'木星獸姬',
  			'Name_jp':'轟星獣姫ベルテ',
  			'hp':'21500',
  			'Atk_before':'227x3(4)回',
  			'Atk_after':'250x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['全體化','貫通 Lv2'],
  			'Characteristic_After':['全體化','貫通 Lv3'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"木星獸姬"
  		}
  	)
}