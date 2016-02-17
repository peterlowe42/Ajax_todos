get "/" do
  @tasks = Task.all
  erb :index
end

post "/" do
  @task = Task.create(name: params[:task_name])

  if request.xhr?
    erb :_task, layout: false, locals: { task: @task }
    # (params[:task_name]).to_s
  else
    redirect "/"
  end

end

delete "/:id" do
  task = Task.find(params[:id])
  task.destroy
  if request.xhr?
    (params[:id]).to_s
  else
    redirect "/"
  end

end
