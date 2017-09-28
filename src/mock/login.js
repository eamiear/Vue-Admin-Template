import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'http://placehold.it/160x160',
    name: '苏打水'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'http://placehold.it/160x160',
    name: '苏打天'
  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'http://placehold.it/160x160',
    name: '苏打方'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return Promise.reject('error')
    }
  },
  logout: () => 'success'
}
