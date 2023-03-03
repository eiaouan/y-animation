import { ConfigEnv ,UserConfig, loadEnv,} from 'vite'
import path from 'path'

const pathResolve = (value: string)=>{
    return path.resolve(__dirname,value)
}

export default ({ mode, }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, pathResolve('env/components/'))
    return {
      root: pathResolve('packages/components'),//1. 修改入口，默认是项目根目录下的index.html
      base: env.VITE_PUBLIC_PATH,
      envDir: pathResolve('env/components/'),//2. 修改环境变量入口，默认是根目录下的env目录
      build: {
        outDir: pathResolve('dist'),//3. 修改打包输出，默认是root文件夹下面的dist目录，比如/app/customer/dist
        emptyOutDir: true
      },
    }
  }