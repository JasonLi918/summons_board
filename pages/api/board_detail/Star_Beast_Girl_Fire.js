export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3069',
  			'Image':'https://i.imgur.com/jKcuuY9.jpg',
  			'Name_tc':'火星獸姬',
  			'Name_jp':'律星獣姫ティセラ',
  			'hp':'24803',
  			'Atk_before':'206x3(4)回',
  			'Atk_after':'297x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','砲擊type'],
  			'Characteristic_Before':['貫通 Lv2','攻擊吸收 Lv1'],
  			'Characteristic_After':['攻擊吸收 Lv1','貫通 Lv3','迴避性能 Lv2'],
  			'Tp_Transform':'35',
  			'Tp_Characteristic':'指向共嗚柱(前方橫三列)',
  			'Comment':"火星獸姬"
  		}
  	)
}