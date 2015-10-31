/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

'use strict';
var _yod = require('yod'),
  def = require('elegant.def/src/simple');

var _ = _yod._;
_.moment = require('moment');

// 设置 def 的默认配置
def.option('applySelf', true);


// 重新定义下 yod，让它支持 sprintf
function yod(any) {
  if (_.isString(any)) {
    var args = _.slice(arguments, 1);
    any = any.replace(/%([dsf])/g, function(r, flag) {
      var rep = args.shift();
      if (_.isUndefined(rep)) { return r; }
      if (flag === 's') {
        return String(rep);
      } else if (flag === 'd') {
        return parseInt(rep, 10);
      } else {
        return parseFloat(rep);
      }
    });
  }
  return _yod(any);
}

_.assign(yod, _yod);


// 重新定义 yod.type
yod.type = function(keys, fn) {
  keys = _.trim(keys).split(/\s*&\s*/);
  return _yod.type(keys.shift(), fn, keys);
};


// 绑定 _ 和 Lodash 到原生的 lodash
yod.type('Lodash & _', function() { return _.apply(_, arguments); });

yod.config('system', {"audio":{"short":"http://liulishuo-dream.qiniudn.com/{{range:1-20}}.mp3","music":"http://liulishuo-dream.qiniudn.com/{{range:111-130}}.mp3","long":["http://llss.qiniudn.com/crm_1428914686442.mp3","http://llss.qiniudn.com/crm_1428979057152.mp3","http://llss.qiniudn.com/crm_1428558020796.mp3","http://llss.qiniudn.com/crm_1428549322829.mp3","http://llss.qiniudn.com/crm_1428581603064.mp3","http://llss.qiniudn.com/crm_1428585991827.mp3","http://llss.qiniudn.com/crm_1428558300767.mp3"],"voice":["http://cdn.llsapp.com/forum/audio/OTZjMWQwMDAwMDBiMWE1Yg==_1429875109_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298758912141429875657461_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298759496741429875817686_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298763042731429876205106_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MjM4MWQwMDAwMGZkNzQ4ZQ==_1429876381_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298763769451429876289272_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298764559541429876284266_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NTg0MWQwMDAwMGY3NTU2MQ==_1429876472_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298767318171429876474365_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298767813651429876636123_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTYwMWQwMDAwMGM1Mjg1OA==_1429876831_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298771900591429877078875_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298773197901429877245671_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTQwMWQwMDAwMDAxMzg1MA==_1429877889_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298785410261429878450113_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NmNjMWQwMDAwMGY3NTFiMw==_1429878711_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298791954661429879018088_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298795119081429879372007_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298796742381429879585529_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTQwMWQwMDAwMDAxMzg1MA==_1429879737_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429880028_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/N2UwMWQwMDAwMGUyZWRmOA==_1429880153_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298802534741429879914866_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTI4MWQwMDAwMGI0NjA0YQ==_1429880275_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429880289_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298804058831429880265927_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429880397_8k_64k.caf","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429880561_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429880761_8k_64k.caf","http://cdn.llsapp.com/forum/audio/OTdjMWQwMDAwMDRlY2E1Zg==_1429880923_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298809945381429880867408_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298811587131429881135045_16k_128k.amr","http://cdn.llsapp.com/forum/audio/N2UwMWQwMDAwMGUyZWRmOA==_1429881229_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298812933351429881269227_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429881369_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429881460_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298815041801429881384196_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298815245781429881490275_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298819423951429881868164_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298816453701429881559355_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429881612_8k_64k.caf","http://cdn.llsapp.com/forum/audio/NjEwMWQwMDAwMGYwNTE4NA==_1429881657_8k_64k.caf","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429881701_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429881845_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298819241421429881890966_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298820394731429881850128_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTdjMWQwMDAwMTAwNzg1Zg==_1429882142_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298821649421429882113545_8k_32k.amr","http://cdn.llsapp.com/forum/audio/OTdjMWQwMDAwMDRlY2E1Zg==_1429882194_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NTU0MWQwMDAwMGUyOGQ1NQ==_1429882386_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298824305831429882230227_16k_128k.amr","http://cdn.llsapp.com/forum/audio/M2Q4MWQwMDAwMGU2MDRmNg==_1429882438_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/ZGU4MWQwMDAwMDEyYWI3YQ==_1429882826_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/OWRjMWQwMDAwMGU5MWU3Nw==_1429882899_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298829341201429882804453_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NWMwMWQwMDAwMDE4MGQ3MA==_1429882982_8k_64k.caf","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429883356_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298836874141429883580815_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429883882_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298842368191429884199567_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298845968221429884554059_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298847455241429884693063_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298847635581429884602771_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTk0MWQwMDAwMDRhMTNhNQ==_1429884871_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298849329111429884793515_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298849954011429884970715_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298851131321429885037755_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTk0MWQwMDAwMDRhMTNhNQ==_1429885124_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298851693731429885088262_16k_128k.amr","http://cdn.llsapp.com/forum/audio/Y2U4MWQwMDAwMGYxNzMzYQ==_1429885264_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjBjMWQwMDAwMDZhNTE4Mw==_1429885371_8k_64k.caf","http://cdn.llsapp.com/forum/audio/14298855006611429885436665_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NzkwMWQwMDAwMDQ2NTllNA==_1429885571_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/OTZjMWQwMDAwMDBiMWE1Yg==_1429885627_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298859562041429885872310_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298860397261429885971305_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298860808401429886053711_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298861692201429886097724_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298861903911429886169137_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298863224561429886223325_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298864427151429886350337_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298864667961429886354153_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298866639611429886557338_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298868577421429886778333_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298872157091429886917875_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298873796561429887334888_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298875561111429887509427_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298877793781429887663778_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879072321429887895766_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879231431429887607308_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298879392311429887883938_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298881329091429888031037_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MzA4MWQwMDAwMGY3MzBjMg==_1429888197_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MzA4MWQwMDAwMGY3MzBjMg==_1429888373_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298885119251429888166244_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298887152341429888440507_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298890721081429888868863_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298891578951429888804878_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298894221921429889389217_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298901078091429890056213_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298902661271429890211166_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298906006171429890572379_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298911504161429891048342_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298912247581429891164371_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298913444161429891269739_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298913463361429891277789_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298913692941429891321230_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298915886341429891344805_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298916418661429891622089_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298916467301429891578923_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298918011261429891684479_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298921319431429891887982_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298926024701429892462503_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298926715911429892281111_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14298927350381429892534165_16k_128k.amr","http://cdn.llsapp.com/forum/audio/MDc0MWQwMDAwMGIwNTQxZA==_1429892983_8k_64k.caf","http://cdn.llsapp.com/forum/audio/MTRjMWQwMDAwMTAxMTg1Mw==_1429893402_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14298953652301429895219536_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298967047651429896533005_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298969619961429896806022_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298972697511429897105741_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14298991502681429899085093_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918017_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918508_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NDE4MWQwMDAwMGVmMmQwNg==_1429918924_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299203620431429920163553_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299216854561429921623962_16k_128k.amr","http://cdn.llsapp.com/forum/audio/ZGNjMWQwMDAwMGZmYmI3Mw==_1429921697_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299220768661429922032372_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299220649161429921999848_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299249733781429924962668_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299257016211429925476615_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299257514001429925732988_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299258289651429925590917_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299269277561429926751387_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZmQ4MWQwMDAwMDZjZGZmNg==_1429927088_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299274199871429927216662_8k_32k.amr","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429927449_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429927782_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/ODBjMWQwMDAwMGM1MGEwMw==_1429927872_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NjZjMWQwMDAwMDZmMzE5Yg==_1429928110_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299285698271429928437829_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZDVjMWQwMDAwMGFiN2I1Nw==_1429928675_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299287920041429928684556_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299292931891429929210039_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299293653511429929311590_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299293982571429929001222_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299303637851429930286587_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429930373_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/MTAwMWQwMDAwMGY0MWM0MA==_1429930600_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299306298871429930541171_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299309043061429930820222_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299310565251429930903812_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299311190091429931076297_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299311741571429931127926_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299313100541429931259646_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299314556971429931368833_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299318146941429931683347_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299318297671429931727345_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299320723321429931964213_16k_128k.amr","http://cdn.llsapp.com/forum/audio/Y2E0MWQwMDAwMTAxM2IyOQ==_1429932706_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299329515521429932669897_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ZTA0MWQwMDAwMTAxMTc4MQ==_1429933451_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299342557151429934112881_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299342911761429934222530_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299345051181429934356942_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299346402891429934538532_8k_32k.amr","http://cdn.llsapp.com/forum/audio/14299357961031429935718848_8k_32k.amr","http://cdn.llsapp.com/forum/audio/MmY0MWQwMDAwMGZmNzBiZA==_1429937378_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299379706571429937745359_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299383117141429938031210_16k_128k.amr","http://cdn.llsapp.com/forum/audio/14299386108771429938513060_8k_32k.amr","http://cdn.llsapp.com/forum/audio/M2Q4MWQwMDAwMGZjMjBmNg==_1429940120_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/NzIwMWQwMDAwMTAxMTFjOA==_1429942391_16k_128k.m4a","http://cdn.llsapp.com/forum/audio/14299431722021429943035938_8k_32k.amr","http://cdn.llsapp.com/forum/audio/ODVjMWQwMDAwMGZiNDIxNw==_1429943264_16k_128k.m4a"]},"location":{"area":["东北","华北","华东","华中","华南","西南","西北"],"region":["110000 北京市","120000 天津市","130000 河北省","140000 山西省","150000 内蒙古自治区","210000 辽宁省","220000 吉林省","230000 黑龙江省","310000 上海市","320000 江苏省","330000 浙江省","340000 安徽省","350000 福建省","360000 江西省","370000 山东省","410000 河南省","420000 湖北省","430000 湖南省","440000 广东省","450000 广西壮族自治区","460000 海南省","500000 重庆市","510000 四川省","520000 贵州省","530000 云南省","540000 西藏自治区","610000 陕西省","620000 甘肃省","630000 青海省","640000 宁夏回族自治区","650000 新疆维吾尔自治区","650000 新疆维吾尔自治区","710000 台湾省","810000 香港特别行政区","820000 澳门特别行政区"],"city":[],"country":[["Afghanistan","AF"],["Albania","AL"],["Algeria","DZ"],["American Samoa","AS"],["Andorra","AD"],["Angola","AO"],["Anguilla","AI"],["Antarctica","AQ"],["Antigua and Barbuda","AG"],["Argentina","AR"],["Armenia","AM"],["Aruba","AW"],["Australia","AU"],["Austria","AT"],["Azerbaijan","AZ"],["Bahamas","BS"],["Bahrain","BH"],["Bangladesh","BD"],["Barbados","BB"],["Belarus","BY"],["Belgium","BE"],["Belize","BZ"],["Benin","BJ"],["Bermuda","BM"],["Bhutan","BT"],["Bolivia","BO"],["Bosnia and Herzegovina","BA"],["Botswana","BW"],["Bouvet Island","BV"],["Brazil","BR"],["British Antarctic Territory","BQ"],["British Indian Ocean Territory","IO"],["British Virgin Islands","VG"],["Brunei","BN"],["Bulgaria","BG"],["Burkina Faso","BF"],["Burundi","BI"],["Cambodia","KH"],["Cameroon","CM"],["Canada","CA"],["Canton and Enderbury Islands","CT"],["Cape Verde","CV"],["Cayman Islands","KY"],["Central African Republic","CF"],["Chad","TD"],["Chile","CL"],["China","CN"],["Christmas Island","CX"],["Cocos [Keeling] Islands","CC"],["Colombia","CO"],["Comoros","KM"],["Congo - Brazzaville","CG"],["Congo - Kinshasa","CD"],["Cook Islands","CK"],["Costa Rica","CR"],["Croatia","HR"],["Cuba","CU"],["Cyprus","CY"],["Czech Republic","CZ"],["Côte d’Ivoire","CI"],["Denmark","DK"],["Djibouti","DJ"],["Dominica","DM"],["Dominican Republic","DO"],["Dronning Maud Land","NQ"],["East Germany","DD"],["Ecuador","EC"],["Egypt","EG"],["El Salvador","SV"],["Equatorial Guinea","GQ"],["Eritrea","ER"],["Estonia","EE"],["Ethiopia","ET"],["Falkland Islands","FK"],["Faroe Islands","FO"],["Fiji","FJ"],["Finland","FI"],["France","FR"],["French Guiana","GF"],["French Polynesia","PF"],["French Southern Territories","TF"],["French Southern and Antarctic Territories","FQ"],["Gabon","GA"],["Gambia","GM"],["Georgia","GE"],["Germany","DE"],["Ghana","GH"],["Gibraltar","GI"],["Greece","GR"],["Greenland","GL"],["Grenada","GD"],["Guadeloupe","GP"],["Guam","GU"],["Guatemala","GT"],["Guernsey","GG"],["Guinea","GN"],["Guinea-Bissau","GW"],["Guyana","GY"],["Haiti","HT"],["Heard Island and McDonald Islands","HM"],["Honduras","HN"],["Hong Kong SAR China","HK"],["Hungary","HU"],["Iceland","IS"],["India","IN"],["Indonesia","ID"],["Iran","IR"],["Iraq","IQ"],["Ireland","IE"],["Isle of Man","IM"],["Israel","IL"],["Italy","IT"],["Jamaica","JM"],["Japan","JP"],["Jersey","JE"],["Johnston Island","JT"],["Jordan","JO"],["Kazakhstan","KZ"],["Kenya","KE"],["Kiribati","KI"],["Kuwait","KW"],["Kyrgyzstan","KG"],["Laos","LA"],["Latvia","LV"],["Lebanon","LB"],["Lesotho","LS"],["Liberia","LR"],["Libya","LY"],["Liechtenstein","LI"],["Lithuania","LT"],["Luxembourg","LU"],["Macau SAR China","MO"],["Macedonia","MK"],["Madagascar","MG"],["Malawi","MW"],["Malaysia","MY"],["Maldives","MV"],["Mali","ML"],["Malta","MT"],["Marshall Islands","MH"],["Martinique","MQ"],["Mauritania","MR"],["Mauritius","MU"],["Mayotte","YT"],["Metropolitan France","FX"],["Mexico","MX"],["Micronesia","FM"],["Midway Islands","MI"],["Moldova","MD"],["Monaco","MC"],["Mongolia","MN"],["Montenegro","ME"],["Montserrat","MS"],["Morocco","MA"],["Mozambique","MZ"],["Myanmar [Burma]","MM"],["Namibia","NA"],["Nauru","NR"],["Nepal","NP"],["Netherlands","NL"],["Netherlands Antilles","AN"],["Neutral Zone","NT"],["New Caledonia","NC"],["New Zealand","NZ"],["Nicaragua","NI"],["Niger","NE"],["Nigeria","NG"],["Niue","NU"],["Norfolk Island","NF"],["North Korea","KP"],["North Vietnam","VD"],["Northern Mariana Islands","MP"],["Norway","NO"],["Oman","OM"],["Pacific Islands Trust Territory","PC"],["Pakistan","PK"],["Palau","PW"],["Palestinian Territories","PS"],["Panama","PA"],["Panama Canal Zone","PZ"],["Papua New Guinea","PG"],["Paraguay","PY"],["People's Democratic Republic of Yemen","YD"],["Peru","PE"],["Philippines","PH"],["Pitcairn Islands","PN"],["Poland","PL"],["Portugal","PT"],["Puerto Rico","PR"],["Qatar","QA"],["Romania","RO"],["Russia","RU"],["Rwanda","RW"],["Réunion","RE"],["Saint Barthélemy","BL"],["Saint Helena","SH"],["Saint Kitts and Nevis","KN"],["Saint Lucia","LC"],["Saint Martin","MF"],["Saint Pierre and Miquelon","PM"],["Saint Vincent and the Grenadines","VC"],["Samoa","WS"],["San Marino","SM"],["Saudi Arabia","SA"],["Senegal","SN"],["Serbia","RS"],["Serbia and Montenegro","CS"],["Seychelles","SC"],["Sierra Leone","SL"],["Singapore","SG"],["Slovakia","SK"],["Slovenia","SI"],["Solomon Islands","SB"],["Somalia","SO"],["South Africa","ZA"],["South Georgia and the South Sandwich Islands","GS"],["South Korea","KR"],["Spain","ES"],["Sri Lanka","LK"],["Sudan","SD"],["Suriname","SR"],["Svalbard and Jan Mayen","SJ"],["Swaziland","SZ"],["Sweden","SE"],["Switzerland","CH"],["Syria","SY"],["São Tomé and Príncipe","ST"],["Taiwan","TW"],["Tajikistan","TJ"],["Tanzania","TZ"],["Thailand","TH"],["Timor-Leste","TL"],["Togo","TG"],["Tokelau","TK"],["Tonga","TO"],["Trinidad and Tobago","TT"],["Tunisia","TN"],["Turkey","TR"],["Turkmenistan","TM"],["Turks and Caicos Islands","TC"],["Tuvalu","TV"],["U.S. Minor Outlying Islands","UM"],["U.S. Miscellaneous Pacific Islands","PU"],["U.S. Virgin Islands","VI"],["Uganda","UG"],["Ukraine","UA"],["Union of Soviet Socialist Republics","SU"],["United Arab Emirates","AE"],["United Kingdom","GB"],["United States","US"],["Unknown or Invalid Region","ZZ"],["Uruguay","UY"],["Uzbekistan","UZ"],["Vanuatu","VU"],["Vatican City","VA"],["Venezuela","VE"],["Vietnam","VN"],["Wake Island","WK"],["Wallis and Futuna","WF"],["Western Sahara","EH"],["Yemen","YE"],["Zambia","ZM"],["Zimbabwe","ZW"],["Åland Islands","AX"]]},"picture":{"user":["http://llss.qiniudn.com/d8bad2c0f825c92e0415a5d46c3d2fbe1.jpg","http://llss.qiniudn.com/d8b2ba8cf572fba9f88e6f565e772714c.jpg","http://llss.qiniudn.com/ddc6410213bd2a6d782e3feaf31d389f3.jpg","http://llss.qiniudn.com/dad84c291ff1f262000f96d36a8dd7ffc.jpg","http://llss.qiniudn.com/d4f8fce2c1195a53d3e688d8f6a6614ce.jpg","http://llss.qiniudn.com/d868f7175ff7f7e6c2e116988f6851f3b.jpg","http://llss.qiniudn.com/dfb05cc71c257a8038932208222e9f8d2.jpg","http://llss.qiniudn.com/d11258715ca4af94e73f28b6a6d51aac1.jpg","http://llss.qiniudn.com/dea663434c78ebd79e31d488da77d329b.jpg","http://llss.qiniudn.com/dcbb8effef6f889c2aaf3a5712dfe401b.jpg","http://llss.qiniudn.com/d11acfab711e373a7d763bbdc4d0f4a97.jpg","http://llss.qiniudn.com/db2cf42357dfbea7ac79ef2f2b8558326.jpg","http://llss.qiniudn.com/dbbd8ecb8875b21df4a13c3ae37ea234c.jpg","http://llss.qiniudn.com/da59a2c991e3d33cddcc6389524afdf28.jpg","http://llss.qiniudn.com/d282009ed5d75d0701c08ea065cf206b5.jpg","http://llss.qiniudn.com/d7b92d4ea408805617047ac929680acd1.jpg","http://llss.qiniudn.com/d53024d79aeebacf41c225984ef49eb7f.jpg","http://llss.qiniudn.com/da4e49b16ff82f1d1855f9c4ca687e849.jpg","http://llss.qiniudn.com/d1c39fb65a1ad30ee64ebb753227ba737.jpg","http://llss.qiniudn.com/de0881d05d552e47a30e4bedd4549ba6d.jpg","http://llss.qiniudn.com/d02ddcbac64e1ea54aff5113f98e664c1.jpg","http://llss.qiniudn.com/da32ddfb572603b5cbd20cfc042ce8d8c.jpg","http://llss.qiniudn.com/d93e08e043f01ee52c9d86b6e7d30cedc.jpg","http://llss.qiniudn.com/dc725492ba055cda8de7a38ac233972e3.jpg","http://llss.qiniudn.com/dc69fc8eb091ccad1303eabd07e36ca54.jpg","http://llss.qiniudn.com/d3d9b9897efcdf38190a15bc170553cec.jpg","http://llss.qiniudn.com/d2fe21837456f209700212dd24e1b033b.jpeg"],"car":["http://llss.qiniudn.com/d3b6a66612b8516fc334531a4f820e99a.jpg","http://llss.qiniudn.com/d3210648b6af2670f9b55908df159db90.jpg","http://llss.qiniudn.com/dbe4a6fb89a778414ca7c404d7b311cf7.jpg","http://llss.qiniudn.com/de36a4811f982c6f30aedb321d5dec20f.jpg","http://llss.qiniudn.com/de18381409caf8784cbc717c975353060.jpg","http://llss.qiniudn.com/d948b0ebb07848576c020f1a169599d62.jpg","http://llss.qiniudn.com/df99d8b1259f8ac34a9590d7fd83e746d.jpg","http://llss.qiniudn.com/dc5411e2c92063a0e9799394ad0db1c8a.jpg","http://llss.qiniudn.com/dd9cb918ac624e719e173833423d8fc6c.jpg","http://llss.qiniudn.com/dea588d75975a0ae9f76f8a5ae2fa88b0.jpg"],"view":["http://llss.qiniudn.com/d419629638aa5faf88b9d186476b71141.jpg","http://llss.qiniudn.com/d5641a3454bc3a9d918405e4766077e66.jpg","http://llss.qiniudn.com/ddad40594715b7ed672ecf0d3418fe9c4.jpg","http://llss.qiniudn.com/d79caa92b25c7f63f5066dc22dc0282de.jpg","http://llss.qiniudn.com/deb62b6c03246b104fa42e770a550dcc1.jpg","http://llss.qiniudn.com/d1e52147ee2207227d8253f1d6ee2cebb.jpg","http://llss.qiniudn.com/d0934e0a3c1394edcf810a4132d103d08.jpg","http://llss.qiniudn.com/dfe7dfb5b0a15b1489adb2575145ccfa3.jpg","http://llss.qiniudn.com/d4e218c7f8b46dd33a6beb8f34dea41ce.jpg","http://llss.qiniudn.com/d49523ccc8c872de1a255e8879ff0548c.jpg"],"star":["http://llss.qiniudn.com/d9f1ef331d0523deb55186857a153c233.png","http://llss.qiniudn.com/dae9cf0106852f0e494a2789c3cf02baa.png","http://llss.qiniudn.com/d38770fce78dfca736d1dafaa1371ffed.png","http://llss.qiniudn.com/de630142571df3f0fb671289d946f4fef.png","http://llss.qiniudn.com/d0072bb62bbc8a3cc9087518097cad483.png","http://llss.qiniudn.com/dcb18055d22c6d61cb0b61059faf66a63.png","http://llss.qiniudn.com/d1b7711b6575bc8d24806eb4110978420.png","http://llss.qiniudn.com/df5a0f51a205e7bd71bbb61688bc09abf.png","http://llss.qiniudn.com/d4b979bc35398629344af3a5690a54cbc.png","http://llss.qiniudn.com/d1eef203c492adee12aa9a5cad5ec7c5a.png","http://llss.qiniudn.com/d0e7a2f0f3392f4df8ef3babb876c74a5.png","http://llss.qiniudn.com/db3f61d51711315dc6e01df8a381ba4b1.png","http://llss.qiniudn.com/dfbaf0306a0d767c351bbd5896e914aed.png","http://llss.qiniudn.com/db7a67689947e3077c6c34b1f4f86762d.png","http://llss.qiniudn.com/d1c2a8b68a389dcec1e9641b10ba3c170.png","http://llss.qiniudn.com/d95b334d0510ddf80d029711ff24545a7.png","http://llss.qiniudn.com/dd57fa4343de47aab98d737e28efd3c85.png","http://llss.qiniudn.com/df8ec7257295a930a836f76b9a20a5834.png","http://llss.qiniudn.com/d15727da805a83d5f4a4a64957591be46.png","http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png","http://llss.qiniudn.com/dcaca24a3ea9f4bf88b59e17650ed2b78.png","http://llss.qiniudn.com/d83a1585ca4a260c5258aac91920ea7e6.png","http://llss.qiniudn.com/d7f764be82c033627f43c89796cc3102c.png","http://llss.qiniudn.com/dde050ca7fdf7a02f8b0474d9122455cc.png","http://llss.qiniudn.com/d35853039e8912f05891f45dfe15af661.png","http://llss.qiniudn.com/d6bd2a4ca24cefe66346b75eaa00e69f7.png"]},"user":{"gender":{"zh":["男","女"],"en":["Female","Male"],"short":["F","M"]},"first":{"male":["James","John","Robert","Michael","William","David","Richard","Joseph","Charles","Thomas","Christopher","Daniel","Matthew","George","Donald","Anthony","Paul","Mark","Edward","Steven","Kenneth","Andrew","Brian","Joshua","Kevin","Ronald","Timothy","Jason","Jeffrey","Frank","Gary","Ryan","Nicholas","Eric","Stephen","Jacob","Larry","Jonathan","Scott","Raymond","Justin","Brandon","Gregory","Samuel","Benjamin","Patrick","Jack","Henry","Walter","Dennis","Jerry","Alexander","Peter","Tyler","Douglas","Harold","Aaron","Jose","Adam","Arthur","Zachary","Carl","Nathan","Albert","Kyle","Lawrence","Joe","Willie","Gerald","Roger","Keith","Jeremy","Terry","Harry","Ralph","Sean","Jesse","Roy","Louis","Billy","Austin","Bruce","Eugene","Christian","Bryan","Wayne","Russell","Howard","Fred","Ethan","Jordan","Philip","Alan","Juan","Randy","Vincent","Bobby","Dylan","Johnny","Phillip","Victor","Clarence","Ernest","Martin","Craig","Stanley","Shawn","Travis","Bradley","Leonard","Earl","Gabriel","Jimmy","Francis","Todd","Noah","Danny","Dale","Cody","Carlos","Allen","Frederick","Logan","Curtis","Alex","Joel","Luis","Norman","Marvin","Glenn","Tony","Nathaniel","Rodney","Melvin","Alfred","Steve","Cameron","Chad","Edwin","Caleb","Evan","Antonio","Lee","Herbert","Jeffery","Isaac","Derek","Ricky","Marcus","Theodore","Elijah","Luke","Jesus","Eddie","Troy","Mike","Dustin","Ray","Adrian","Bernard","Leroy","Angel","Randall","Wesley","Ian","Jared","Mason","Hunter","Calvin","Oscar","Clifford","Jay","Shane","Ronnie","Barry","Lucas","Corey","Manuel","Leo","Tommy","Warren","Jackson","Isaiah","Connor","Don","Dean","Jon","Julian","Miguel","Bill","Lloyd","Charlie","Mitchell","Leon","Jerome","Darrell","Jeremiah","Alvin","Brett","Seth","Floyd","Jim","Blake","Micheal","Gordon","Trevor","Lewis","Erik","Edgar","Vernon","Devin","Gavin","Jayden","Chris","Clyde","Tom","Derrick","Mario","Brent","Marc","Herman","Chase","Dominic","Ricardo","Franklin","Maurice","Max","Aiden","Owen","Lester","Gilbert","Elmer","Gene","Francisco","Glen","Cory","Garrett","Clayton","Sam","Jorge","Chester","Alejandro","Jeff","Harvey","Milton","Cole","Ivan","Andre","Duane","Landon"],"female":["Mary","Emma","Elizabeth","Minnie","Margaret","Ida","Alice","Bertha","Sarah","Annie","Clara","Ella","Florence","Cora","Martha","Laura","Nellie","Grace","Carrie","Maude","Mabel","Bessie","Jennie","Gertrude","Julia","Hattie","Edith","Mattie","Rose","Catherine","Lillian","Ada","Lillie","Helen","Jessie","Louise","Ethel","Lula","Myrtle","Eva","Frances","Lena","Lucy","Edna","Maggie","Pearl","Daisy","Fannie","Josephine","Dora","Rosa","Katherine","Agnes","Marie","Nora","May","Mamie","Blanche","Stella","Ellen","Nancy","Effie","Sallie","Nettie","Della","Lizzie","Flora","Susie","Maud","Mae","Etta","Harriet","Sadie","Caroline","Katie","Lydia","Elsie","Kate","Susan","Mollie","Alma","Addie","Georgia","Eliza","Lulu","Nannie","Lottie","Amanda","Belle","Charlotte","Rebecca","Ruth","Viola","Olive","Amelia","Hannah","Jane","Virginia","Emily","Matilda","Irene","Kathryn","Esther","Willie","Henrietta","Ollie","Amy","Rachel","Sara","Estella","Theresa","Augusta","Ora","Pauline","Josie","Lola","Sophia","Leona","Anne","Mildred","Ann","Beulah","Callie","Lou","Delia","Eleanor","Barbara","Iva","Louisa","Maria","Mayme","Evelyn","Estelle","Nina","Betty","Marion","Bettie","Dorothy","Luella","Inez","Lela","Rosie","Allie","Millie","Janie","Cornelia","Victoria","Ruby","Winifred","Alta","Celia","Christine","Beatrice","Birdie","Harriett","Mable","Myra","Sophie","Tillie","Isabel","Sylvia","Carolyn","Isabelle","Leila","Sally","Ina","Essie","Bertie","Nell","Alberta","Katharine","Lora","Rena","Mina","Rhoda","Mathilda","Abbie","Eula","Dollie","Hettie","Eunice","Fanny","Ola","Lenora","Adelaide","Christina","Lelia","Nelle","Sue","Johanna","Lilly","Lucinda","Minerva","Lettie","Roxie","Cynthia","Helena","Hilda","Hulda","Bernice","Genevieve","Jean","Cordelia","Marian","Francis","Jeanette","Adeline","Gussie","Leah","Lois","Lura","Mittie","Hallie","Isabella","Olga","Phoebe","Teresa","Hester","Lida","Lina","Winnie","Claudia","Marguerite","Vera","Cecelia","Bess","Emilie","John","Rosetta","Verna","Myrtie","Cecilia","Elva","Olivia","Ophelia","Georgie","Elnora","Violet","Adele","Lily","Linnie","Loretta","Madge","Polly","Virgie","Eugenia","Lucile","Lucille","Mabelle","Rosalie"]},"family":"赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐","giveName":"贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓","last":["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Myers","Ford","Hamilton","Graham","Sullivan","Wallace","Woods","Cole","West","Jordan","Owens","Reynolds","Fisher","Ellis","Harrison","Gibson","McDonald","Cruz","Marshall","Ortiz","Gomez","Murray","Freeman","Wells","Webb","Simpson","Stevens","Tucker","Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Morales","Kennedy","Warren","Dixon","Ramos","Reyes","Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer","Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins","Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson","Fields","Gutierrez","Ryan","Schmidt","Carr","Vasquez","Castillo","Wheeler","Chapman","Oliver","Montgomery","Richards","Williamson","Johnston","Banks","Meyer","Bishop","McCoy","Howell","Alvarez","Morrison","Hansen","Fernandez","Garza","Harvey","Little","Burton","Stanley","Nguyen","George","Jacobs","Reid","Kim","Fuller","Lynch","Dean","Gilbert","Garrett","Romero","Welch","Larson","Frazier","Burke","Hanson","Day","Mendoza","Moreno","Bowman","Medina","Fowler","Brewer","Hoffman","Carlson","Silva","Pearson","Holland","Douglas","Fleming","Jensen","Vargas","Byrd","Davidson","Hopkins","May","Terry","Herrera","Wade","Soto","Walters","Curtis","Neal","Caldwell","Lowe","Jennings","Barnett","Graves","Jimenez","Horton","Shelton","Barrett","Obrien","Castro","Sutton","Gregory","McKinney","Lucas","Miles","Craig","Rodriquez","Chambers","Holt","Lambert","Fletcher","Watts","Bates","Hale","Rhodes","Pena","Beck","Newman","Haynes","McDaniel","Mendez","Bush","Vaughn","Parks","Dawson","Santiago","Norris","Hardy","Love","Steele","Curry","Powers","Schultz","Barker","Guzman","Page","Munoz","Ball","Keller","Chandler","Weber","Leonard","Walsh","Lyons","Ramsey","Wolfe","Schneider","Mullins","Benson","Sharp","Bowen","Daniel","Barber","Cummings","Hines","Baldwin","Griffith","Valdez","Hubbard","Salazar","Reeves","Warner","Stevenson","Burgess","Santos","Tate","Cross","Garner","Mann","Mack","Moss","Thornton","Dennis","McGee","Farmer","Delgado","Aguilar","Vega","Glover","Manning","Cohen","Harmon","Rodgers","Robbins","Newton","Todd","Blair","Higgins","Ingram","Reese","Cannon","Strickland","Townsend","Potter","Goodwin","Walton","Rowe","Hampton","Ortega","Patton","Swanson","Joseph","Francis","Goodman","Maldonado","Yates","Becker","Erickson","Hodges","Rios","Conner","Adkins","Webster","Norman","Malone","Hammond","Flowers","Cobb","Moody","Quinn","Blake","Maxwell","Pope","Floyd","Osborne","Paul","McCarthy","Guerrero","Lindsey","Estrada","Sandoval","Gibbs","Tyler","Gross","Fitzgerald","Stokes","Doyle","Sherman","Saunders","Wise","Colon","Gill","Alvarado","Greer","Padilla","Simon","Waters","Nunez","Ballard","Schwartz","McBride","Houston","Christensen","Klein","Pratt","Briggs","Parsons","McLaughlin","Zimmerman","French","Buchanan","Moran","Copeland","Roy","Pittman","Brady","McCormick","Holloway","Brock","Poole","Frank","Logan","Owen","Bass","Marsh","Drake","Wong","Jefferson","Park","Morton","Abbott","Sparks","Patrick","Norton","Huff","Clayton","Massey","Lloyd","Figueroa","Carson","Bowers","Roberson","Barton","Tran","Lamb","Harrington","Casey","Boone","Cortez","Clarke","Mathis","Singleton","Wilkins","Cain","Bryan","Underwood","Hogan","McKenzie","Collier","Luna","Phelps","McGuire","Allison","Bridges","Wilkerson","Nash","Summers","Atkins"],"nick":["MAKOの沐","Dean","vector ","Bean","long ago","开心绵","Kelly-Jyi","Doris&story","John Stewart","M酱","Yolanda😊","婷","jakeylao","君莫笑","冰淇淋い","玛奇朵","呵呵呵呵我","黄金太阳","龙之笛潇","Jacinthe🍉","Sofer","Amber","安兮。JH","Sam👠💄👙👛🙅","Eleven","强子","不作不会死","yaoyan2046","May","失意，的prin","Jessie Z","amwawa🐂","Lace","小太阳","glenna","潇湘~","Zoey","毛豆豆。","英语课中的蜘蛛侠","Angel♛墨芊😊","tamia_han","小白兔 白又白","You┏┯━┹寜","俺名儿露西","阴影Jerry","Jane Anna","宁静致远Fern","guaiguai","莎翁","wade清风","kathy66","慕晓","andy","栤ǒ檸☆檬","Caroline","guzal","小皇帝詹姆斯","grace","北安°","yunm","邂逅一片时光","一颗酸浆","蔓延…","Silhouette ","Nancy","vivi ying","233333","♚ Pinocchio","陈靖宇—qaby","Adelina","萌萌","再美不过微笑","凡人","000(香盈袖)","Bethany","sophieeeee_","记忆","/XY依然未知/","Nix.","Queenie","Carson","记得我是卢丽君吗","Calida🐠","沐沐","凯文","🌾麦曦Maicy","゛不变的微笑","DDDDanieLLLL","Timothy-Shi93","echowhm","良山好汉","黑色星期五","无名小卒蒋姑娘","稻香味儿的夏天","蓝杉","垚妈","tina","小飞飞","lynn何","kate","Ericazeng","Allison","Phoenix","TSZFS","渡康王","legend","sfjwiry","arieseskimo","____  小小小蕾蕾℃","神偷","　 清自定","Sylvia喵喵","/梦~回绝鸢","带笑♚ai","真理先生","小雨","Maria","Jade","花~花","红桃k","呵呵","cinderella","女汉子","嗷大喵","海T","NiKolaS","伤风街18号","格桑梅朵","在奔跑","💋贝杉杉baby💋","Shamy😘助教","showTime","Yuki","carman_lee","梁健豪jonho","Calla&amp;","qin尧---子车","Heyson","长情","喵星人","Tanic","幸福嗎","candy","Autism💎","Von.Vivian","一路有你","糊糊沉沉","crowinwhite","笨小呆","曼联的小胖","✪大娃°","repissa","WYX.","Li沛Chen","Vicky Wu","kyrie irving","big8848","停、小琉","freya","大黄蜂","木舍年華","你是大坏蛋、、","liyiwa","Elle","务虚的老鸨","メ じ☆ve默默哋暗殇灬","enry-wake-up","长丹欧尼","幂马","Sharon King","   ♚、 贼贼","玉竹公子","赫女神","VKing"],"comment":["好赞好棒","楼主厉害诶！└(^O^)┘","沙发被我一个人站啦。O(∩_∩)O~","Endless love","给各位大神级的孩纸点赞啊。加油加油哦。⊙ω⊙","我也来参加(￣∇￣)","哇塞哇塞!","耶耶，给个赞👍","怎么能这么好听呢😘","哪里参加","哪里报名","All of me","我鼓掌就好了。👏👏👏","suger😄","快来唱","撒花～鼓掌～","就在这个帖子里面唱就好了","Good","sugar","Because of you","THX😊","还有能不能唱中文歌呀  不能我就不唱(≧3≦)","I wanted you 😂😂","我唱啦  你听听(≧∇≦)","yes~😊","Good man(≧∇≦)","能不能放原唱","这个是she","😂😂😂","这是tears in heaven","嘿嘿  你爱特我咋没写字呀","我发了表情，哈哈","我是来围观的(๑‾ ꇴ ‾๑)","真滴呀  坏手机  都看不到你的表情(╯з╰)","你个小屁孩  么么大  我唱得咋样呀","哇 组长在这里( ^ω^ )捧场👏","这首歌叫什么名字来着？我想不起来了","超好听！赞赞赞！","是前面一首还是后面的呀(≧∇≦)","谢谢亲╭(╯3╰)╮","挺有磁性的声音  赞一个(￣∇￣)","try","一唱英文歌就知道怎么去发音，硬伤啊","你唱的第一首～最长的那首","喜欢这个www","Innocence ","必须要给组长点赞～(^-^)","江南","😱oh,no.you are very \nbellyful.\n\n","see you again目前只会这些","赞一个","Footprints in the sand","大神你怎么可以这么几句就完事了比声音比质量比数量你绝对都完爆他们啊支持你啊🎉🎉🎉你一定要再来好多好多首啊","我JJ的歌 必须支持","惊为天人啊～","瞎哼哼，凑个热闹，嘿嘿","and I love you so","<Say you love me🍎>","Let it go","all of me 歌词有些乱，哈哈","lol 😺","<New soul> 🍎","you are walking?","I like,really!","Latch -Sam Smith","我听到我的呼吸 在说要尽全力\n为人生种种经历 留下美好回忆\n我感谢每次风雨 给我更多鼓励\n让我领悟生命真正意义\n我们能改变命运的轨迹\n创造值得骄傲的时机\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n从梦想遥不可及 到跟幸福相遇\n我要用我的故事 证明我的能力\n从前路走不下去 到风光更美丽\n让我激发自己无限潜力\n我们能改变命运的轨迹\n创造值得骄傲的时机\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n我相信做好自己 我相信我就是奇迹\n我知道我心里 会有更大的天地\n要相信自己无限极\n（yeah…ooh…）","yes😁","我的手机铃声！","😐那你不要发现我唱错词了才好。","😊","谢谢大家的鼓励😊","大家想听什么歌？😆","帖子好快","么么么哒么么么哒，献花","I wanted you","《All of of》","😘😘😘","蔡依林的倒带。刚跑完步唱的，声音发颤哈哈","脑子一下短路，打成all of of😿","我们帖子开咯","wau","new soul","wau+1","~","分手吧是我让你累了   特别伤感的一首歌","safe and sound -Talyor Swift","还会乐器啊","三人游","不会，刚开着电脑。。","Groove Coverage：Far away from home","。。。。哈哈哈。。。","我来了哈","后面什么词。。","只会这句(๑• . •๑)","😱👏👏👏","whatever will be","coming。 不知道唱那首啊","谢谢","It's so great! I remember this song by MYMP. Would you sing their other song?","哈哈，我还真没发现～主要是唱的好听，其他都忽略","It's so pretty.🎵","Sorry...","好听","thx😊","哇欧","New soul","See you again开头","好棒","厉害","就是玩一玩   ，，，  唱的也不咋地哈","改编版小星星","这个不能错过","nice performance！","Let it go , with background music","😁","太赞了，从头听到尾可惜后面没录到了，好好听","Woman in love","Thx😳","thx，honey！","青春修炼手册","叫做she  哈哈","so good!","好听！！","😘😘","adele-make you feel my love","love me like you do","让我想起那会儿跳劲舞了。","我爱你I Love You","taylor swift-ours","太棒了！朋友！坚持你","umbrella","哈哈James 总是这么热情慷慨","都是朋友！应该了！加油！","的","Every time","😇我有这歌","一定是英文歌吗？","Thumbs u up.","Great. Hope u can more natural. Some words.  You don't have to pronounce it really clearly. Which will sounds more natural and wonderful.","Thanks","you are not alone","不来一首？朋友？","Active a beautiful song. The rhythmic it is springly   I do love it","Make you feel my love---For my group members,sweet dreams!","多多支持~","what～a～wonderful～world","yes!","剑伤","haha","Adele，哈哈 ，we feel it，make U feel our love too，charming voice ，night ，nice dream","i-like-ur -voice","Love paradise ","sounds sweet！","nice！","Take me to your heart ","Black sheep","Apple tree","grenade,  sing by Bruno Mars","Thx,😄","thx😄","群英荟萃～","只能唱英文吗？？","It is so great that I love it so much!","big big girl. 发音不准，凑凑热闹~","以前都不太敢开口唱歌的😳选一首大家比较熟悉的英文歌Heartbeat❤喜欢的童鞋可以投我一票吗✨😁","You are so great to sing the song of 'endless love '! Are you a student in college?","艾薇儿的How you remind me.很久没唱这首歌啦，有些歌词忘记啦，不要怪我😂","厉害，","大神们加油","很感人👍","free loop","So nice","凑热闹凑热闹～～～～","因为他今晚唱累了","捧场捧场～～","再来一首My love😜很经典的英文老歌🌹。听过喜欢的童鞋帮我点赞吧😊","thanks！","凑热闹哈～～","怎么会说的这么好","over the rainbow","（☆_☆）","Thx😄","热带雨林","唱了忘了艾特楼主，，，，，然后就艾特一下吧，，261楼那个the show ....重在参与，。，。","翻下去才发现变成了266楼，，，-_-||","绝对的支持max❤️ 妹妹\n好好听🎉🎉🎉","看看","safe and sound","all of me","maps😁😁","在哪？","Amazing as usual 👏👏👏","很棒！","👏👏👏👏👏","😂😂什么底里底里？","很棒哦","She","留声机的感觉","like it","好棒啊！","这么晚真的好吗？","谢谢你( ˘ ³˘)","嗯嗯￣▽￣","666","see you again没伴奏不好听","我自己发的怎么看不到啊","you raise me up","谢谢亲","😊谢谢亲╭(╯3╰)╮","飞儿…我们的爱","声音😍巨赞","😍😍tears in heaven😘","yesterday once more","你的声音真不是一般的好听😍😍，大爱😘","萌！","rolling in the deep","Surper nice😘","声音好听","😘😘😘pretty vioce😍","boyfriend","very nice😍😍","👏👏","thx","这是那首英文歌？","😍太有范啦！","这是哪一首？","不是断网了吗😂","周六周日来瞅瞅   下周三考信息  ","😂","中考信息啊","好听，好听，好听。*(∩_∩)*。。。","额勒，我不知道bellyful素神马意思滴说。-_-||","🐣🐣🐣🐣","wonderful tonight","清唱come back to me宇多田光","羞答答的玫瑰静悄悄的开","just one last fance","自己弹琴？","thx~😘😘","great","Yesterday once more","Home","Close to u","big big world","唱了艾米丽亚的大大世界","这首不错","she","在哪报名啊","you are so great!","唱一首艾薇儿的when you are gone.歌词有可能会唱错哈😂","这首是什么歌😱","Sometimes When We Touch","手机录音音质较差 大家将就着听吧……","you're awesome","imagine me without you","😊😊😊","suger啊😂😂","我是来吼的，吼得好爽……","Try","灿烈！！！","什么？","I Like",":-Ogood","2004","someone like you .","long long ago","唱得好有感觉，醉了","great！！","唱的很棒噢，请问这首歌名字是什么？","要不要这么好听呐^O^","顶顶顶","我也来参加....","怎么参加","不错","爱死小豆的声音啦","i  like  it","亲╭(╯3╰)╮，我昨天晚上还给你唱了个我新学的歌，你听到没","好好听"]},"video":{"qiniu":["http://llss.qiniudn.com/d3ea47aa028deb41b8b37c6a3c31ac94a.mp4"],"hotbody":["http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/3f0a60a0-b105-11e4-a632-00163e000ae2.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/3f0a60a0-b105-11e4-a632-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/31a0aeaa-b1c4-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/0971b4da-a12d-11e4-99a4-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/5d1ed7d6-b297-11e4-8a2d-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4","http://resource.hotbody.cn/5fe056e6-b1c7-11e4-9b96-00163e0028ec.mp4","http://resource.hotbody.cn/4e846fc6-b105-11e4-97d2-00163e0028ec.mp4","http://resource.hotbody.cn/469897f8-a50f-11e4-996f-00163e0028ec.mp4","http://resource.hotbody.cn/6e0263cc-b1c7-11e4-8c91-00163e000ae2.mp4"]},"word":{"cn":"人类长期只有口语用文字记录口语形成的书面语历史很短系统的语言成为人和禽兽分离的重要工具文字使人类能进入有历史记录的文明社会把时空的影像变化转码成视觉可见的符号系统使后人能通过间接的文字想象出画面了解历史和学习技术经验使文字成为文化的主要载体文字突破口语受到时间和空间的限制是人类可以在书面语的基础上完整地传承人类的智慧和精神财富使人类能够完善教育体系提高自己的智慧发展科学技术进入文明社会普通文字是用简单图形形成早期更加接近图画更加接近几何线条例如拉丁字母是简单的直线弧线和点构成汉字主要是由直线构成所以叫做方块汉字古代的甲骨文汉字埃及象形文字和玛雅文字等古老文字图画性比较强由于特殊人群视觉能力的局限还可以发明变异的视觉符号或者触觉符号来代替普通文字盲文是为了适应没有视觉能力的盲人发明的触觉符号手语是为了适应没有语音能力的哑巴发明的用手舞动的动态视觉符号旗语是为了适应航海等远距离听觉和视觉局限发明的用旗子舞动的动态视觉符号这些代码文字一律建立在表音文字或者表意文字的拼音方案的基础上传统汉字是无法使用这种代码的因为字的数量太多在电子信息传输的初期人们还采用阿拉伯数字代替汉字传输书面语这种数字代码可以给任何文字编码但是汉字因为数量多需要专门的代码翻译人员才能使用有人把文字分成线性文字和非线性文字这样不科学因为无论是普通文字还是代码文字都有线条和点等视觉元素","good":["ace","amazing","astonishing","astounding","awe-inspiring","awesome","badass","beautiful","bedazzling","best","breathtaking","brilliant","cat's meow","cat's pajamas","classy","cool","dandy","dazzling","delightful","divine","doozie","epic","excellent","exceptional","exquisite","extraordinary","fabulous","fantastic","fine","finest","first-class","first-rate","flawless","funkadelic","geometric","glorious","gnarly","good","grand","great","groovy","groundbreaking","hunky-dory","impeccable","impressive","incredible","kickass","kryptonian","laudable","legendary","lovely","luminous","magnificent","majestic","marvelous","mathematical","mind-blowing","neat","outstanding","peachy","perfect","phenomenal","pioneering","polished","posh","praiseworthy","premium","priceless","prime","primo","rad","remarkable","riveting","sensational","slick","solid","spectacular","splendid","stellar","striking","stunning","stupendous","stylish","sublime","super","super-duper","super-excellent","superb","superior","supreme","swell","terrific","tiptop","top-notch","transcendent","tremendous","ultimate","unreal","well-made","wicked","wonderful","wondrous","world-class"],"face":["( .-. )","( .o.)","( `·´ )","( ° ͜ ʖ °)","( ͡° ͜ʖ ͡°)","( ⚆ _ ⚆ )","( ︶︿︶)","( ﾟヮﾟ)","(\\/)(°,,,°)(\\/)","(¬_¬)","(¬º-°)¬","(¬‿¬)","(°ロ°)☝","(´・ω・)っ","(ó ì_í)","(ʘᗩʘ')","(ʘ‿ʘ)","(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄","(͡° ͜ʖ ͡°)","(ಠ_ಠ)","(ಠ‿ಠ)","(ಠ⌣ಠ)","(ಥ_ಥ)","(ಥ﹏ಥ)","(ง ͠° ͟ل͜ ͡°)ง","(ง ͡ʘ ͜ʖ ͡ʘ)ง","(ง •̀_•́)ง","(ง'̀-'́)ง","(ง°ل͜°)ง","(ง⌐□ل͜□)ง","(ღ˘⌣˘ღ)","(ᵔᴥᵔ)","(•ω•)","(•◡•)/","(⊙ω⊙)","(⌐■_■)","(─‿‿─)","(╯°□°）╯","(◕‿◕)","(☞ﾟ∀ﾟ)☞","(❍ᴥ❍ʋ)","(っ◕‿◕)っ","(づ｡◕‿‿◕｡)づ","(ノಠ益ಠ)ノ","(ノ・∀・)ノ","(；一_一)","(｀◔ ω ◔´)","(｡◕‿‿◕｡)","(ﾉ◕ヮ◕)ﾉ","*<{:¬{D}}}","=^.^=","t(-.-t)","| (• ◡•)|","~(˘▾˘~)","¬_¬","¯(°_o)/¯","¯_(ツ)_/¯","°Д°","ɳ༼ຈل͜ຈ༽ɲ","ʅʕ•ᴥ•ʔʃ","ʕ´•ᴥ•`ʔ","ʕ•ᴥ•ʔ","ʕ◉.◉ʔ","ʕㅇ호ㅇʔ","ʕ；•`ᴥ•´ʔ","ʘ‿ʘ","͡° ͜ʖ ͡°","ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ","Ѱζ༼ᴼل͜ᴼ༽ᶘѰ","ب_ب","٩◔̯◔۶","ಠ_ಠ","ಠoಠ","ಠ~ಠ","ಠ‿ಠ","ಠ⌣ಠ","ಠ╭╮ಠ","ರ_ರ","ง ͠° ل͜ °)ง","๏̯͡๏﴿","༼ ºººººل͟ººººº ༽","༼ ºل͟º ༽","༼ ºل͟º༼","༼ ºل͟º༽","༼ ͡■ل͜ ͡■༽","༼ つ ◕_◕ ༽つ","༼ʘ̚ل͜ʘ̚༽","ლ(´ڡ`ლ)","ლ(́◉◞౪◟◉‵ლ)","ლ(ಠ益ಠლ)","ᄽὁȍ ̪őὀᄿ","ᔑ•ﺪ͟͠•ᔐ","ᕕ( ᐛ )ᕗ","ᕙ(⇀‸↼‶)ᕗ","ᕙ༼ຈل͜ຈ༽ᕗ","ᶘ ᵒᴥᵒᶅ","‎‎(ﾉಥ益ಥ）ﾉ","≧☉_☉≦","⊙▃⊙","⊙﹏⊙","┌( ಠ_ಠ)┘","╚(ಠ_ಠ)=┐","◉_◉","◔ ⌣ ◔","◔̯◔","◕‿↼","◕‿◕","☉_☉","☜(⌒▽⌒)☞","☼.☼","♥‿♥","⚆ _ ⚆","✌(-‿-)✌","〆(・∀・＠)","ノ( º _ ºノ)","ノ( ゜-゜ノ)","ヽ( ͝° ͜ʖ͡°)ﾉ","ヽ(`Д´)ﾉ","ヽ༼° ͟ل͜ ͡°༽ﾉ","ヽ༼ʘ̚ل͜ʘ̚༽ﾉ","ヽ༼ຈل͜ຈ༽ง","ヽ༼ຈل͜ຈ༽ﾉ","ヽ༼Ὸل͜ຈ༽ﾉ","ヾ(⌐■_■)ノ","꒰･◡･๑꒱","﴾͡๏̯͡๏﴿","｡◕‿◕｡","ʕノ◔ϖ◔ʔノ","꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱"]}});


/**
 * 如果通过这个 key ，只能在 keys 中匹配到唯一的一个值，则返回此值，否则返回 false
 *
 * @param {String} key
 * @param {Array} keys
 *
 * @example
 *
 * shortCut('e', ['en', 'zh']) // => 'en'
 * shortCut('t', ['en', 'zh']) // => false
 * shortCut('e', ['en', 'ec']) // => false
 */
function shortCut(key, keys) {
  if (!_.isString(key)) { return false; }
  keys = _.filter([].concat(keys), function(k) { return k.indexOf(key) >= 0; });
  return keys.length === 1 ? keys[0] : false;
}


_.mixin({

  /**
   *
   * 根据第一个参数 rate 的概率，随机返回第二、第三个参数
   *
   * @param {Number|String} rate
   * @param {*} [hit]
   * @param {*} [otherwise]
   * @returns {*}
   *
   * @example
   *
   * prob( 0.2 )     // 0.2  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob('30%')     // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 30 )      // 30%  的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 2 )       // 100% 的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   * prob( 0 )       // 0%   的概率返回 true 或 第二个参数，否则返回 false 或 第三个参数
   */
  prob: function(rate, hit, otherwise) {
    hit = _.isUndefined(hit) ? true : hit;
    otherwise = _.isUndefined(otherwise) ? false : otherwise;


    if (/^[\d\.]+%?$/.test(rate)) {
      rate = parseFloat(rate);
      rate = Math.round(rate <= 1 ? rate * 100 : rate) % 101; // 保证 0 <= rate <= 100
    } else {
      rate = 50;  // 默认 50%
    }

    return _.sample(_.shuffle(_.range(100))) < rate ? hit : otherwise;
  },


  shortCut: shortCut,


  /**
   * 获取 yod.config 项，并按指定的规则随机返回一项
   * @param {String} key
   * @param {Object} [opts]
   * @returns {*}
   */
  sys: function(key, opts) {
    var data = yod.config('system.' + key + ':meta');
    var val = data.val, meta = data.meta || {};
    opts = opts || {};

    if (_.isPlainObject(val)) {
      var cate = opts.category || meta.category, cates = _.keys(val);

      // Empty object: if specified "category" then throw；otherwise return itself
      if (!cates.length) {
        if (cate) {
          throw new Error('The config for "' + key + '" is an empty object.');
        } else {
          return val;
        }
      }

      if (!_.isString(cate) || !(cate in val)) {
        cate = shortCut(cate, cates) || _.sample(cates);
      }

      val = val[cate];
    }

    // http://abc.com/{{range:1-20}}.mp3 => http://abc.com/4.mp3
    if ( _.isString(val)) {
      var isRanged = false;
      val = val.replace(/\{\{range:(\d+)\-(\d+)\}\}/g, function(raw, from, to) {
        isRanged = true;
        var res = String(_.random(parseInt(from, 10), parseInt(to, 10)));

        // 如果使用了  {{range:001-221}} 这种结构
        if (res.length < from.length) {
          res = _.repeat(from.charAt(0), from.length - res.length) + res;
        }
        return res;
      });

      return isRanged ? val : _.sample(val);
    }

    if (_.isArray(val)) {
      return (val.prefix || '') + _.sample(val) + (val.postfix || '');
    }

    return val;
  }
});



yod.modifier(':repeat', def(function repeat () {
  /**
   *
   * Repeat last generator
   *
   *
   * @defaults {min: 1, max: 10}
   *
   * @rules ( Function genFn, Integer min, Integer max [, String join] ) -> *
   * @rules ( Function genFn, Integer length [, String join] ) -> *
   * @rules ( Function genFn [, String join] ) -> *
   *
   * @example
   *
   * yod('@Bool.repeat(2)')       // => some thing like: [true, false]
   * yod('@Int.repeat(3, "-")')   // => some thing like: "20-3-12"
   */

  var length = this.$has('length') ? this.length : _.random(this.min, this.max);
  var gen = this.genFn;

  var result = _.times(length, gen);

  // self.join 可能等于空字符串
  return this.$has('join') ? result.join(this.join) : result;
}, {"defaults":{"min":1,"max":10},"rules":[["*",[["genFn","function"],["min","int"],["max","int"],["join","string"]],[[0,1,2],[0,1,2,3]]],["*",[["genFn","function"],["length","int"],["join","string"]],[[0,1],[0,1,2]]],["*",[["genFn","function"],["join","string"]],[[0],[0,1]]]],"names":["repeat"]}));


yod.modifier('index', def(function index() {
  /**
   * Get indexed item in an array or indexed character in a string
   *
   * @rules ( * arg [, Integer i = 0] ) -> *
   *
   * @example
   *
   * yod('@([1, 2, 3]).index(2)');  // => 3
   * yod('@(abc).index(2)');        // => 'c'
   */
  if (_.isArray(this.arg)) {
    return this.arg[this.i];
  }

  if (_.isString(this.arg)) {
    return this.arg.charAt(this.i);
  }

  return this.arg;
}, {"rules":[["*",[["arg","*"],["i","int",0]],[[0],[0,1]]]],"names":["index"]}));

yod.modifier('stringify', def(function stringify(obj) {
  /**
   * Call JSON.stringify on obj
   *
   * @rule (* obj) -> string
   */
  return JSON.stringify(obj);
}, {"rules":[["string",[["obj","*"]],[[0]]]],"names":["stringify"],"arguments":["obj"]}));

yod.modifier('String', 'title', def(function title(str) {
  /**
   * Upper case first letter in every word
   *
   * @rule (string str) -> string
   */
  return str.replace(/\b\w/g, function(letter) { return letter.toUpperCase(); });
}, {"rules":[["string",[["str","string"]],[[0]]]],"names":["title"],"arguments":["str"]}));

yod.modifier('String', 'cap', def(function cap(str) {
  /**
   * Upper case first letter in str
   *
   * @rule (string str) -> string
   */
  return str.charAt(0).toUpperCase() + str.substr(1);
}, {"rules":[["string",[["str","string"]],[[0]]]],"names":["cap"],"arguments":["str"]}));


yod.modifier('String', 'upper', def(function upper(str) {
  /**
   *
   * Upper case all letters in str
   *
   * @rule (string str) -> string
   */

  return str.toUpperCase();
}, {"rules":[["string",[["str","string"]],[[0]]]],"names":["upper"],"arguments":["str"]}));

yod.modifier('String', 'lower', def(function lower(str) {

  /**
   * Lower case all letters in str
   *
   * @rule (string str) -> string
   */

  return str.toLowerCase();
}, {"rules":[["string",[["str","string"]],[[0]]]],"names":["lower"],"arguments":["str"]}));


// load lodash modifiers
_.each(_.keys(_), function(key) {
  if (yod.isModifierNameValid(key) && !yod.isModifierNameExists(key)) {
    yod.modifier(key, function() {
      return _[key].apply(_, arguments);
    });
  }
});




yod.type('Boolean & Bool', def(function() {
  /**
   * Generate a random boolean value.
   *
   * @name Boolean
   * @alias Bool
   *
   * @rule ([Number probability = 0.5]) -> Boolean
   * @rule (String percentage) -> Boolean
   *
   * @example
   *
   * // Ten percent's probability return true
   * @Bool(0.1);
   * @Bool('10%');
   */

  return _.prob(this.$has('probability') ? this.probability : this.percentage);

}, {"rules":[["boolean",[["probability","number",0.5]],[[],[0]]],["boolean",[["percentage","string"]],[[0]]]],"names":["Boolean","Bool"]}));

yod.type('Double & Float', def(function() {
  /**
   *
   * Generate a random float value.
   *
   * __Note: when you specified format to `2`, you may get a random value `0.10`, and the last `0` will be ignored, so you will get `0.1` eventually.__
   *
   * @name Double
   * @alias Float
   *
   * @defaults {min: 0, max: 1, format: '1-4'}
   *
   * @rule ([[Number max], [String format]]) -> float
   * @rule (Number min, Number max, [String format]) -> float
   * @rule (Number min, Number max, Number format) -> float
   *
   * @example
   *
   * @Float('2');       // generate value likes: 0.34
   * @Float(5, '1-3');  // generate value likes: 3.215 or 2.1 or 4.23
   * @Float(8, 9, '1'); // generate value likes: 8.2
   *
   */
  var result = _.random(this.min, this.max, true);

  // 如果 format 设置不规范，就使用 1-10 模式，设置 '-5' => '1-5', '5-' => '5-10', '5' => '5-5'
  var dMin = 1, dMax = 10;

  var format = String(this.format).split('-').slice(0, 2);
  if (format.length < 2) { format.unshift(format[0]); }

  format = _.map(format, function(n, i) {
    var r = parseInt(n, 10);
    return _.isNaN(r) ? (i ? dMax : dMin) : r;
  });

  result = result.toFixed(_.random(format[0], format[1]));

  // 最后几位如果是 0，精度会丢失
  return parseFloat(result);
}, {"defaults":{"min":0,"max":1,"format":"1-4"},"rules":[["float",[["max","number"],["format","string"]],[[],[1],[0],[0,1]]],["float",[["min","number"],["max","number"],["format","string"]],[[0,1],[0,1,2]]],["float",[["min","number"],["max","number"],["format","number"]],[[0,1,2]]]],"names":["Double","Float"]}));



yod.type('Integer & Int', def(function() {
  /**
   * Generate a random integer between `min` to `max` (include `min` and `max`).
   *
   * @name Integer
   * @alias Int
   * @rule ([[Integer min = 0, ] Integer max = 1000]) -> Integer
   *
   * @example
   *
   * @Int();          // return a integer between 0 - 1000
   * @Int(10);        // return a integer between 0 - 10
   * @Int(10, 100);   // return a integer between 10 - 100
   *
   */
  return _.random(this.min, this.max);
}, {"rules":[["integer",[["min","int",0],["max","int",1000]],[[],[1],[0,1]]]],"names":["Integer","Int"]}));


yod.type('Number', def(function() {
  /**
   *
   * Generator a random number value (can be a random float or integer value).
   *
   * @name Number
   * @rule () -> Number
   */
  return _.prob() ? yod('@Double') : yod('@Integer');

}, {"rules":[["number",[],[[]]]],"names":["Number"]}));


// config
var chars = {
  vowel: 'aeiou',
  hash: '0123456789abcdef',
  consonant: 'bcdfghjklmnpqrstvwxyz',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()[]'
};
chars.alpha = chars.lower + chars.upper + chars.number;
chars.all = chars.alpha + chars.symbol;

// 使用 yod.config 的目的是使的用户可以修改这些默认的值
yod.config('system.character', chars, {category: 'alpha'});

// define
yod.type('Character & Char', def(function() {
  /**
   *
   * Generate a random character.
   *
   * Available pre-defined pools: `vowel`, `hash`, `consonant`, `lower`, `upper`, `number`, `symbol`, `alpha` and `all`
   *
   * - If parameter `pool` not in pre-defined pools, then itself will become a characters pool.
   * - You can set `useAsPool` to `true` to force pre-defined pool key words to become a normal characters pool.
   *
   * @name Character
   * @alias Char
   * @rule ([String pool = 'alpha' [, Boolean useAsPool = false]]) -> Char
   *
   * @example
   *
   * @Char('vowel');        // will return random character in 'aeiou'
   * @Char('vowel', true);  // will return random character in 'vowel'
   *
   */

  if (chars[this.pool] && !this.useAsPool) {
    return _.sys('character', {category: this.pool});
  }

  return _.sample(this.pool);

}, {"rules":[["char",[["pool","string","alpha"],["useAsPool","bool",false]],[[],[0],[0,1]]]],"names":["Character","Char"]}));


yod.type('String & Str', def(function() {
  /**
   * Generate a random string.
   *
   * - you can specified the string's character generate pool
   * - you can specified string length by setting `length` argument
   * - you can set `min` and `max` to get a random length string which length is between `min` to `max`
   *
   * @name String
   * @alias Str
   *
   * @defaults {min: 2, max: 20}
   *
   * @rule ([String pool = 'alpha' ] ) -> string
   * @rule ([String pool = 'alpha' ,] int length) -> string
   * @rule ([String pool = 'alpha' ,] int min, int max) -> string
   */
  var length = this.$has('length') ? this.length : _.random(this.min, this.max);

  return yod('@Char("%s").repeat(%d, "")', this.pool, length);
}, {"defaults":{"min":2,"max":20},"rules":[["string",[["pool","string","alpha"]],[[],[0]]],["string",[["pool","string","alpha"],["length","int"]],[[1],[0,1]]],["string",[["pool","string","alpha"],["min","int"],["max","int"]],[[1,2],[0,1,2]]]],"names":["String","Str"]}));


function toIntJSDate(key, relative, otherwise) {
  key = String(key);
  // 1410715640.579, 1410715640, 1410715640579
  if (/^(\d{10})\.?(\d{1,3})?$/.test(key)) {
    var s = RegExp.$1, ms = RegExp.$2 || 0;
    return (s - 0) * 1000 + (ms - 0);
  } else if (/^-?[\d.]+$/.test(key)) {
    var float = parseFloat(key);
    return _.isNaN(float) ? otherwise : relative + float * 1000;
  } else {
    var d = (new Date(key)).getTime();
    if (_.isNaN(d)) {
      return otherwise;
    }
    return d;
  }
}

yod.type('Date', def(function() {
  /**
   * Generate a random timestamp or formatted date.
   *
   * Caller                             |  Description
   * ---------------------------------  | ----------------
   * @Date()                            | last ten year's random timestamp
   * @Date(0)                           | last ten year to next ten year's random timestamp
   * @Date(-2)                          | last two year's timestamp
   * @Date(3)                           | next three year's timestamp
   * @Date(-1, 3600)                    | next one hour's timestamp
   * @Date("3600", "7200")              | next one hour to next two hour's timestamp
   * @Date("2011-1-1", "2011-12-31")    | between 2011-1-1 00:00:00 to 2011-12-31 00:00:00
   *
   *
   * Default format is timestamp, you can specified date format in the first argument, for example:
   *
   * `@Date('YYYY-MM-DD HH:mm:ss', -2)`
   *
   * __Date format reference：http://momentjs.com/docs/#/displaying/format/__
   *
   * @name Date
   *
   * @defaults {format: timestamp}
   *
   * @rule ([String format,] [Integer flag = -10, [Nature range]]) -> String
   * @rule ([String format,] String from, String to) -> String
   *
   */
  var from, to, now = new Date().getTime(), oneYearMs = 3600000 * 24 * 365;
  if (this.$has('flag')) {
    var flag = this.flag;
    var range = this.$has('range') ? this.range * 1000 : Math.abs(flag || 10) * oneYearMs;

    from = flag > 0 ? now : now - range;
    to = flag < 0 ? now : now + range;
  } else {
    from = toIntJSDate(this.from, now, now - oneYearMs);
    to = toIntJSDate(this.to, now, now + oneYearMs);
  }

  var random = _.random(from, to);
  if (this.format === 'timestamp') {
    return Math.round(random / 1000);
  } else if (this.format === 'jsTimestamp') {
    return Math.round(random);
  } else {
    return _.moment(random).format(this.format);
  }
}, {"defaults":{"format":"timestamp"},"rules":[["string",[["format","string"],["flag","int",-10],["range","nature"]],[[],[1],[1,2],[0],[0,1],[0,1,2]]],["string",[["format","string"],["from","string"],["to","string"]],[[1,2],[0,1,2]]]],"names":["Date"]}));



yod.type('Range', def(function() {
  /**
   * Generate a specified integer range.
   *
   * @name Range
   *
   * @defaults {start: 0, stop: 10, step: 1}
   *
   * @rule () -> Array
   * @rule (Integer stop) -> Array
   * @rule (Integer start, Integer stop) -> Array
   * @rule (Integer start, Integer stop, Integer step) -> Array
   */

  return _.range(this.start, this.stop, this.step);
}, {"defaults":{"start":0,"stop":10,"step":1},"rules":[["array",[],[[]]],["array",[["stop","int"]],[[0]]],["array",[["start","int"],["stop","int"]],[[0,1]]],["array",[["start","int"],["stop","int"],["step","int"]],[[0,1,2]]]],"names":["Range"]}));


var seqSeeds = {};
yod.type('Id & Sequence & Seq', def(function() {
  /**
   * Generate a rand auto increment id.
   *
   * @name Id
   * @alias Sequence
   * @alias Seq
   *
   * @rule ([String seed = '_d'], [Integer start = 1 [, Integer step = 1]]) -> int
   */

  if (!(this.seed in seqSeeds)) {
    seqSeeds[this.seed] = this.start;
    return this.start;
  }

  seqSeeds[this.seed] += this.step;
  return seqSeeds[this.seed];

}, {"rules":[["int",[["seed","string","_d"],["start","int",1],["step","int",1]],[[],[1],[1,2],[0],[0,1],[0,1,2]]]],"names":["Id","Sequence","Seq"]}));




yod.type('Guid & GUID & Uuid & UUID', def(function() {
  /**
   *
   * Generate a random [guid](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80%E6%A0%87%E8%AF%86%E7%AC%A6)
   *
   * __format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx__
   *
   *    - x is replaced with a random hexadecimal digit from 0 to f
   *    - y is replaced with a random hexadecimal digit from 8 to b
   *
   * @name Guid
   * @alias GUID
   * @alias Uuid
   * @alias UUID
   *
   * @rule () -> string
   *
   */

  /* jshint ignore:start */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  /* jshint ignore:end */

}, {"rules":[["string",[],[[]]]],"names":["Guid","GUID","Uuid","UUID"]}));


yod.type('Objectid & ObjectId & Oid', def(function() {

  /**
   * Generate a random [object id](http://docs.mongodb.org/manual/reference/object-id/)
   *
   * @name Objectid
   * @alias ObjectId
   * @alias Oid
   * @rule () -> string
   */

  return yod('@Char(hash).repeat(24, "")');

}, {"rules":[["string",[],[[]]]],"names":["Objectid","ObjectId","Oid"]}));



yod.type('Md5 & MD5', def(function() {

  /**
   * Generate a random md5 encrypted value.
   *
   * @name Md5
   * @alias MD5
   * @rule () -> string
   */

  return yod('@Char(hash).repeat(32, "")');

}, {"rules":[["string",[],[[]]]],"names":["Md5","MD5"]}));



yod.type('CW', def(function() {
  /**
   * Generate a random Chinese word
   *
   * _Using config `system.word.cn`_
   *
   * @name CW
   * @rule () -> string
   */

  return _.sys('word.cn');
}, {"rules":[["string",[],[[]]]],"names":["CW"]}));



yod.type('CS', def(function() {
  /**
   * Generate a random Chinese sentence
   *
   * @name CS
   * @rule () -> string
   */

  var all = yod.config('system.word.cn');
  var len = all.length - 20, res = [];
  _.times(_.random(1, 4), function() {
    res.push(all.substr(_.random(0, len), _.random(8, 20)));
  });
  return res.join('，') + '。';
}, {"rules":[["string",[],[[]]]],"names":["CS"]}));


/*------------------------------------------------------------------
 ----------------------  CP     -------------------------
 ------------------------------------------------------------------*/
yod.type('CP', def(function() {
  /**
   * Generate a random Chinese paragraph
   *
   * @name CP
   * @rule (Integer length) -> String
   * @rule ([ Integer min = 3, Integer max = 7 ]) -> String
   */
  return yod('@CS.repeat(%d, " ")', this.length || _.random(this.min, this.max));
}, {"rules":[["string",[["length","int"]],[[0]]],["string",[["min","int",3],["max","int",7]],[[],[0,1]]]],"names":["CP"]}));


/*------------------------------------------------------------------
 ----------------------  Word & EW     -------------------------
 ------------------------------------------------------------------*/
yod.type('Word & EW', def(function() {
  /**
   * Generate a random english word
   *
   * @name Word
   * @alias EW
   *
   * @rule (Integer length) -> String
   * @rule ([ Integer min = 3, Integer max = 10 ]) -> String
   */
  var length = this.$get('length', _.random(this.min, this.max)),
    consonants = 'bcdfghjklmnprstvwz', // consonants except hard to speak ones
    vowels = 'aeiou', // vowels
    all = consonants + vowels, // all
    text = '',
    chr;

  // I'm sure there's a more elegant way to do this, but this works
  // decently well.
  for (var i = 0; i < length; i++) {
    if (i === 0) {
      // First character can be anything
      chr = _.sample(all);
    } else if (consonants.indexOf(chr) === -1) {
      // Last character was a vowel, now we want a consonant
      chr = _.sample(consonants);
    } else {
      // Last character was a consonant, now we want a vowel
      chr = _.sample(vowels);
    }
    text += chr;
  }

  return text;
}, {"rules":[["string",[["length","int"]],[[0]]],["string",[["min","int",3],["max","int",10]],[[],[0,1]]]],"names":["Word","EW"]}));



// Could get smarter about this than generating random words and
// chaining them together. Such as: http://vq.io/1a5ceOh
yod.type('Sentence & ES', def(function() {
  /**
   *
   * Generate a random english sentence
   *
   * @name Sentence
   * @alias ES
   *
   * @rule (Integer length) -> String
   * @rule ([ Integer min = 12, Integer max = 18 ]) -> String
   */

  return yod('@Word.repeat(%d, " ").cap.', this.$has('length') ? this.length : _.random(this.min, this.max));
}, {"rules":[["string",[["length","int"]],[[0]]],["string",[["min","int",12],["max","int",18]],[[],[0,1]]]],"names":["Sentence","ES"]}));


yod.type('Paragraph & EP', def(function() {
  /**
   * Generate a random english paragraph
   *
   * @name Paragraph
   * @alias EP
   *
   * @rule (Integer length) -> String
   * @rule ([ Integer min = 3, Integer max = 7 ]) -> String
   */

  return yod('@Sentence.repeat(%d, " ")', this.$has('length') ? this.length : _.random(this.min, this.max));
}, {"rules":[["string",[["length","int"]],[[0]]],["string",[["min","int",3],["max","int",7]],[[],[0,1]]]],"names":["Paragraph","EP"]}));




yod.type('Good', def(function() {
  /**
   * Generate a random good word
   *
   * _Using config `system.word.good`_
   *
   * @name Good
   * @rule () -> string
   */
  return _.sys('word.good');
}, {"rules":[["string",[],[[]]]],"names":["Good"]}));



yod.type('Face', def(function() {
  /**
   * Generate a random ascii face string
   *
   * _Using config `system.word.face`_
   *
   * @name Face
   * @rule () -> string
   */
  return _.sys('word.face');
}, {"rules":[["string",[],[[]]]],"names":["Face"]}));





yod.type('Image & Img & Picture & Pic', def(function() {
  /**
   *
   * Generate a random image url
   *
   * _Using config `system.picture`_
   *
   * @name Image
   * @alias Img
   * @alias Picture
   * @alias Pic
   * @rule ([String category = 'all']) -> String
   */
  return _.sys('picture', {category: this.category});
}, {"rules":[["string",[["category","string","all"]],[[],[0]]]],"names":["Image","Img","Picture","Pic"]}));

function _uriComponent(arg) { return encodeURIComponent(arg).replace(/%20/g, '+'); }
function _holder(base, self) {
  var size = self.$get('size', '640x480'),
    colors = self.$get('colors', yod('@Color/${@Color}.png')).replace(/#/g, '').toLowerCase(),
    text = _uriComponent(self.$get('text', yod('@Good')));

  return base + size + '/' + colors + '&text=' + text;
}



yod.type('Dummy', def(function Dummy(self) {
  /**
   *
   * Using [http://dummyimage.com](http://dummyimage.com) to generate a random image
   *
   * @rule ([string size, [string text, [string colors]]]) -> string
   * @rule ([int size, [string text, [string colors]]]) -> string
   *
   */

  return _holder('http://dummyimage.com/', self);
}, {"rules":[["string",[["size","string"],["text","string"],["colors","string"]],[[],[0],[0,1],[0,1,2]]],["string",[["size","int"],["text","string"],["colors","string"]],[[0],[0,1],[0,1,2]]]],"names":["Dummy"],"arguments":["self"]}));

yod.type('Placehold & PlaceHold', def(function Placehold(self) {
  /**
   *
   * Using [http://placehold.it](http://placehold.it) to generate a random image
   *
   * @alias PlaceHold
   *
   * @rule ([string size, [string text, [string colors]]]) -> string
   * @rule ([int size, [string text, [string colors]]]) -> string
   *
   */

  return _holder('http://placehold.it/', self);

}, {"rules":[["string",[["size","string"],["text","string"],["colors","string"]],[[],[0],[0,1],[0,1,2]]],["string",[["size","int"],["text","string"],["colors","string"]],[[0],[0,1],[0,1,2]]]],"names":["PlaceHold","Placehold"],"arguments":["self"]}));

yod.type('Placeimg & PlaceImg', def(function Placeimg() {
  /**
   *
   * Using [http://placeimg.com](http://placeimg.com) to generate a random image
   *
   * @defaults {categories: [animals, arch, nature, people, tech], hues: [sepia, grayscale]}
   * @alias PlaceImg
   * @rule ([string size, [string category, [string hue]]]) -> string
   * @rule ([int size, [string category, [string hue]]]) -> string
   */
  var size = this.$get('size', '640x480');
  if (!/^\d+x\d+$/.test(size)) {
    size = size + 'x' + size;
  }

  var cate = _.shortCut(this.category, this.categories) || _.sample(this.categories);
  var hue = _.shortCut(this.hue, this.hues);

  return 'http://placeimg.com/' + size.replace('x', '/') + '/' + cate + (hue ? '/' + hue : '');
}, {"defaults":{"categories":["animals","arch","nature","people","tech"],"hues":["sepia","grayscale"]},"rules":[["string",[["size","string"],["category","string"],["hue","string"]],[[],[0],[0,1],[0,1,2]]],["string",[["size","int"],["category","string"],["hue","string"]],[[0],[0,1],[0,1,2]]]],"names":["PlaceImg","Placeimg"]}));


yod.type('Unsplash & UnSplash & Splash & U', def(function () {
  /**
   *
   * Using [unsplash](https://unsplash.it/) to generate a random image
   *
   * Support arguments examples:
   *
   *  - 640
   *  - 640x320
   *  - 640/320
   *  - gray
   *  - blur
   *  - west
   *  - south
   *  - east
   *  - north
   *  - center
   *
   * @rule ([* ...args]) -> string
   *
   */
  var args = this.$get('args', []);
  var size = '1920/800', grayscale = false, blur = false, gravity = false;

  args.forEach(function (arg) {
    arg = arg.toString();
    if (/(\d+)(?:[\x\/](\d+))?/.test(arg)) {
      size = RegExp.$1 + '/' + (RegExp.$2 || RegExp.$1);
    } else if ('grayscale'.indexOf(arg) === 0) {
      grayscale = true;
    } else if ('blur'.indexOf(arg) === 0) {
      blur = true;
    } else {
      ['north', 'east', 'south', 'west', 'center'].some(function (k) {
        if (k.indexOf(arg) === 0) {
          gravity = k;
          return true;
        }
      });
    }
  });

  return 'https://unsplash.it/' +
    (grayscale ? 'g/' : '') +
    size +
    '/?random' +
    (blur ? '&blur' : '') +
    (gravity ? '&gravity=' + gravity : '');


}, {"rules":[["string",[[1,"args","*"]],[[],[0]]]]}));




yod.type('Audio & Mp3 & MP3', def(function() {
  /**
   *
   * Generate a random audio url
   *
   * _Using config `system.audio`_
   *
   * @name Audio
   * @alias Mp3
   * @alias MP3
   *
   * @rule ([String category = 'all']) -> String
   */

  return _.sys('audio', {category: this.category});
}, {"rules":[["string",[["category","string","all"]],[[],[0]]]],"names":["Audio","Mp3","MP3"]}));




yod.type('Video & Mp4 & MP4', def(function() {
  /**
   *
   * Generate a random video url
   *
   * _Using config `system.video`_
   *
   * @name Video
   * @alias Mp4
   * @alias MP4
   *
   * @rule ([String category = 'all']) -> String
   */

  return _.sys('video', {category: this.category});

}, {"rules":[["string",[["category","string","all"]],[[],[0]]]],"names":["Video","Mp4","MP4"]}));





yod.type('Gender & Sex', def(function() {
  /**
   *
   * Generate a random gender string
   *
   * - `category` can be `'zh'`, `'en'` and `'short'`
   *
   * _Using config `system.user.gender`_
   *
   * @name Gender
   * @alias Sex
   * @rule ([string category = 'en']) -> string
   */
  return _.sys('user.gender', {category: this.category});
}, {"rules":[["string",[["category","string","en"]],[[],[0]]]],"names":["Gender","Sex"]}));


yod.type('Age', def(function() {
  /**
   *
   * Generate a random integer age
   *
   * - `type` can be `'child'`, `'teen'`, `'adult'`, `'senior'`, `'all'`
   *
   * @name Age
   * @rule ([string type]) -> integer
   */
  switch (this.$get('type')) {
    case 'child':
      return _.random(1, 12);
    case 'teen':
      return _.random(13, 19);
    case 'adult':
      return _.random(18, 65);
    case 'senior':
      return _.random(65, 100);
    case 'all':
      return _.random(1, 100);
    default:
      return _.random(18, 100);
  }
}, {"rules":[["integer",[["type","string"]],[[],[0]]]],"names":["Age"]}));



yod.type('Avatar', def(function() {
  /**
   * Generate a random avatar url
   *
   * @name Avatar
   * @rule () -> string
   */
  return _.sys('picture.user');
}, {"rules":[["string",[],[[]]]],"names":["Avatar"]}));


yod.type('First & FirstName', def(function () {

  /**
   * Generate a random first name
   *
   * - `gender` can be `'male'` or `'female'`
   *
   * _Using config `system.user.first`_
   *
   * @name First
   * @alias FirstName
   * @rule ([string gender = all]) -> string
   */

  return _.sys('user.first', {category: this.gender});

}, {"rules":[["string",[["gender","string","all"]],[[],[0]]]],"names":["First","FirstName"]}));



yod.type('Last & LastName', def(function () {
  /**
   *
   * Generate a random last name
   *
   * _Using config `system.user.last`_
   *
   * @name Last
   * @alias LastName
   *
   * @rule () -> string
   */

  return _.sys('user.last');

}, {"rules":[["string",[],[[]]]],"names":["Last","LastName"]}));


yod.type('UserName & Username', def(function() {

  /**
   * Generate a random username
   *
   * @name UserName
   * @alias Username
   *
   * @defaults { gender: '*', middle: false }
   * @rule ([[String gender], [Boolean middle]]) -> String
   * @rule (Boolean middle, String gender) -> String
   */
  return yod('@First(%s)%s @Last', this.gender, this.middle ? ' @First(' + this.gender + ')' : '' );

}, {"defaults":{"gender":"*","middle":false},"rules":[["string",[["gender","string"],["middle","bool"]],[[],[1],[0],[0,1]]],["string",[["middle","bool"],["gender","string"]],[[0,1]]]],"names":["UserName","Username"]}));


yod.type('Name & ChineseName', def(function() {

  /**
   * Generate a random chinese name
   *
   * @name Name
   * @alias ChineseName
   * @rule () -> string
   */
  var name = '';
  _.times(_.random(1, 2), function() { name += _.sys('user.family'); });
  _.times(_.random(1, 2), function() { name += _.sys('user.giveName'); });
  return name;

}, {"rules":[["string",[],[[]]]],"names":["Name","ChineseName"]}));


yod.type('Nick & NickName & Nickname', def(function() {
  /**
   * Generate a random nickname
   *
   * _Using config `system.user.nick`_
   *
   * @name Nick
   * @alias NickName
   * @alias Nickname
   * @rule () -> string
   */
  return _.sys('user.nick');

}, {"rules":[["string",[],[[]]]],"names":["Nick","NickName","Nickname"]}));


yod.type('Comment', def(function() {

  /**
   * Generate a random comment
   *
   * _Using config `system.user.comment`_
   *
   * @name Comment
   *
   * @rule () -> string
   *
   */
  return _.sys('user.comment');

}, {"rules":[["string",[],[[]]]],"names":["Comment"]}));


yod.type('Telephone & Tel', def(function() {

  /**
   *
   * Generate a random telephone
   *
   * - `country` can be `'fr'`, `'uk'`, `'us'`, default is `'zh'`
   *
   * @name Telephone
   * @alias Tel
   *
   * @rule ([string country = zh, ] [bool format = false]) -> string
   */

  var tel, numPick,
    ukNum = function (parts) {
      var section = [];
      //fills the section part of the phone number with random numbers.
      parts.sections.forEach(function(n) {
        section.push(yod('@Char(number).repeat(%d, "")', n));
      });
      return parts.area + section.join(' ');
    };

  switch (this.country) {
    case 'fr':
      numPick = _.sample(['06', '07']) + yod('@Char(number).repeat(8,"")');
      tel = this.format ? numPick.match(/../g).join(' ') : numPick;
      break;

    case 'uk':

      numPick = _.sample([
        { area: '07' + _.sample(['4','5','7','8','9']), sections: [2,6] },
        { area: '07624 ', sections: [6] }
      ]);
      tel = this.format ? ukNum(numPick) : ukNum(numPick).replace(' ', '');
      break;

    case 'us':
      var areacode = yod('(@Int(2, 9)@Int(0, 9)@Int(0, 8))');
      var exchange = yod('@Int(2, 9)@Int(0, 9)@Int(0, 9)');
      var subscriber = yod('@Int(1000, 9999)');

      tel = this.format ? areacode + ' ' + exchange + '-' + subscriber : areacode + exchange + subscriber;
      break;

    default:
      tel = '1' + _.sample([3, 4, 5, 7, 8]) + _.random(0, 9) + '-' + yod('@Int(1000, 9999)-@Int(1000, 9999)');
      tel =  this.format ? tel : tel.replace(/-/g, '');
  }

  return tel;

}, {"rules":[["string",[["country","string","zh"],["format","bool",false]],[[],[1],[0],[0,1]]]],"names":["Telephone","Tel"]}));




yod.type('Color', def(function(format) {

  /**
   * Generate a random color value
   *
   * @name Color
   *
   * @rule ([string format]) -> string
   *
   * @example
   *
   * @Color();        // => some thing like: '#AB32F1'
   * @Color(short);   // => some thing like: '#345'
   * @Color(rgb);     // => some thing like: 'rgb(2, 10, 231)'
   */
  var len = 6;
  if (_.shortCut(format, 'short')) {
    len = 3;
  } else if (_.shortCut(format, 'rgb')) {
    return 'rgb(' + _.random(0, 255) + ', ' + _.random(0, 255) + ', ' + _.random(0, 255) + ')';
  }
  return '#' + _.sample('0123456789ABCDEF', len).join('');

}, {"rules":[["string",[["format","string"]],[[],[0]]]],"names":["Color"],"arguments":["format"]}));


var tld = ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io'];
yod.type('Domain', def(function() {
  /**
   * Generate a random domain
   *
   * @name Domain
   *
   * @rule () -> string
   */
  return yod('@Word(3, 7)') + '.' + _.sample(tld);
}, {"rules":[["string",[],[[]]]],"names":["Domain"]}));


yod.type('Email', def(function() {
  /**
   * Generate a random email
   *
   * @name Email
   *
   * @rule () -> string
   */
  return yod('@First.lower') + (_.prob(0.5) ? yod('.@Last.lower') : '') + '@' + yod('@Domain');
}, {"rules":[["string",[],[[]]]],"names":["Email"]}));


yod.type('Ip & IP', def(function() {
  /**
   * Generate a random ip
   *
   * @name Ip
   * @alias IP
   *
   * @rule () -> string
   */
  return yod('@Integer(1, 254).repeat(4, ".")');
}, {"rules":[["string",[],[[]]]],"names":["Ip","IP"]}));


yod.type('Ipv6 & IPv6 & IPV6', def(function() {
  /**
   * Generate a random ipv6
   *
   * @name Ipv6
   * @alias IPv6
   * @alias IPV6
   *
   * @rule () -> string
   */
  return yod('@Char(hash).repeat(4, "").repeat(8, ":")');
}, {"rules":[["string",[],[[]]]],"names":["Ipv6","IPv6","IPV6"]}));


//yod.type('URL', def(function() {
//
//}), 'Url', 'Link');





yod.type('Country', def(function(abbr) {
  /**
   * Generate a random country in world
   *
   * - setting `abbr` to `true` to return the country's shorthand name
   *
   * _Using config `system.location.country`_
   *
   * @name Country
   * @rule ([bool abbr = false]) -> string
   */
  return _.sample(yod.config('system.location').country)[abbr ? 1 : 0];
}, {"rules":[["string",[["abbr","bool",false]],[[],[0]]]],"names":["Country"],"arguments":["abbr"]}));


yod.type('Province & Region', def(function() {
  /**
   * Generate a random province in China
   *
   * _Using config `system.location.region`_
   *
   * @name Province
   * @alias Region
   * @rule () -> string
   */
  return _.sys('location.region').split(' ').pop();
}, {"rules":[["string",[],[[]]]],"names":["Province","Region"]}));



yod.type('Area', def(function() {
  /**
   *
   * Generate a random area in China
   *
   * _Using config `system.location.area`_
   *
   * @name Area
   * @rule () -> string
   */
  return _.sys('location.area');
}, {"rules":[["string",[],[[]]]],"names":["Area"]}));

//yod.type('City', def(function() {}));
//yod.type('Street', def(function() {}));



yod.type('Latitude', def(function() {
  /**
   * Generate a random latitude float value
   *
   * @name Latitude
   *
   * @rule ([Int fixed = 5], [Int min = -90, Int max = 90]) -> Float
   */
  return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);

}, {"rules":[["float",[["fixed","int",5],["min","int",-90],["max","int",90]],[[],[1,2],[0],[0,1,2]]]],"names":["Latitude"]}));



yod.type('Longitude', def(function() {
  /**
   * Generate a random longitude float value
   *
   * @name Longitude
   * @rule ([Int fixed = 5], [Int min = -180, Int max = 180]) -> Float
   */
  return yod('@Float(%d, %d, "%s")', this.min, this.max, this.fixed);
}, {"rules":[["float",[["fixed","int",5],["min","int",-180],["max","int",180]],[[],[1,2],[0],[0,1,2]]]],"names":["Longitude"]}));




yod.type('Coordinates', def(function() {
  /**
   * Generate a random coordinates
   *
   * @name Coordinates
   * @rule () -> string
   */
  return yod('@Latitude @Longitude');
}, {"rules":[["string",[],[[]]]],"names":["Coordinates"]}));



yod.config('system.car.type', [
  '奧迪', '北汽', '宾利', '宝马', '別克',
  '布加迪', '比亚迪', '雪佛兰', '法拉利',
  '福特', '通用', '本田', '红旗', '兰博基尼',
  '路虎', '玛莎拉蒂', '马自达', '保时捷', '劳斯莱斯'
]);

yod.type('CarType', def(function() {
  /**
   * Generate a random car type
   *
   * _Using config `system.car.type`_
   *
   * @name CarType
   * @rule () -> string
   */
  return _.sys('car.type');
}, {"rules":[["string",[],[[]]]],"names":["CarType"]}));



yod.type('CarImage', def(function() {
  /**
   * Generate a random car image
   *
   * _Using config `system.picture.car`_
   *
   * @name CarImage
   * @rule () -> string
   */
  return _.sys('picture.car');
}, {"rules":[["string",[],[[]]]],"names":["CarImage"]}));



module.exports = yod;
