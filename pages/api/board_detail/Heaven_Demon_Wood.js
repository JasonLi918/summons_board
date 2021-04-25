export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3489',
  			'Image':'https://i.imgur.com/ZnoZX5C.jpg',
  			'Name_tc':'木天魔',
  			'Name_jp':'再臨天魔エオス',
  			'hp':'32700',
  			'Atk_before':'194x3(4)回',
  			'Atk_after':'220x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','防禦type'],
  			'Characteristic_Before':['全體化','道具吸收 Lv2'],
  			'Characteristic_After':['全體化','道具吸收 Lv2','火・光屬性傷害輕減 Lv2'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"木天魔"
  		}
  	)
}