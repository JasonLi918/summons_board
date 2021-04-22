export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2399',
  			'Image':'https://imgur.com/ZuNNGzd.jpg',
  			'Name_tc':'煉擊帝',
  			'Name_jp':'煉獄帝獣・アドラグレンド',
  			'hp':'17582',
  			'Atk_before':'290x3(4)回',
  			'Atk_after':'307x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','強襲type'],
  			'Characteristic_Before':['全體化','對空攻擊 Lv1'],
  			'Characteristic_After':['全體化','對空攻擊 Lv1','技能盾 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具效果強化(隨機)',
  			'Comment':"二代火限"
  		}
  	)
}