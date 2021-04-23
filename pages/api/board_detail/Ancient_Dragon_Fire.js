export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2856',
  			'Image':'https://imgur.com/1dbPIt3.jpg',
  			'Name_tc':'火古龍',
  			'Name_jp':'真焔古龍・フレイバルカン',
  			'hp':'13328',
  			'Atk_before':'365x3(4)回',
  			'Atk_after':'405x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['飛行','貫通 Lv2'],
  			'Characteristic_After':['飛行','貫通 Lv2','攻擊吸收 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"火古龍"
  		}
  	)
}