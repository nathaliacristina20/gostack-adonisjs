'use strict'

const TaskHook = exports = module.exports = {}
const Helpers = use('Helpers')
const Mail = use('Mail')

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) {
    return
  }

  const { email, username } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()
  const { title } = taskInstance

  await Mail.send(
    ['emails.new_task', 'emails.new_task_text'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('adonis@rockeseat.com', 'Diego | Rocketseat')
        .subject('Nova tarefa para voce')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }
  )
}
