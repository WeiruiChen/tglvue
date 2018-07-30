module.exports  = {


    chainWebpack: config => {
        config.externals({
            qq: 'qq'
        })
    }

}