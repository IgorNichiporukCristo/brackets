module.exports = function check(str, bracketsConfig) {
    let buff = []
    let accum = 0;
    for (let i = 0; i < str.length; i++) {
        for (let y = 0; y < bracketsConfig.length; y++) {
            switch (bracketsConfig[y].indexOf(str[i])) {
                case -1:
                    break;
                case 0:
                    if (bracketsConfig[y][0] == bracketsConfig[y][1] && accum == 0) {
                        buff.push(str[i])
                        accum = 1
                    } else if (bracketsConfig[y][0] == bracketsConfig[y][1] && accum == 1) {
                        if (buff[buff.length - 1] == bracketsConfig[y][0]) {
                            buff.pop()
                            accum = 0
                        }
                    } else buff.push(str[i])
                    break;
                case 1:
                    if (buff[buff.length - 1] == bracketsConfig[y][0]) {
                        buff.pop()
                    } else return false

                    break;

            }
        }
    }
    return (buff.length == 0)
}