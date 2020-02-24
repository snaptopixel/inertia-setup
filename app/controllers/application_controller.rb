class ApplicationController < ActionController::Base
  def home
    render inertia: 'Home', props: {
      name: 'Interview Assistant',
      studies: [
        {name: 'My Study', id: 1, url: '/studies/1'}
      ]
    }
  end

  def show
    render inertia: 'Detail', props: {
      name: params[:name] || 'My Study',
      description: 'This is a study about things',
      id: params[:id],
      errors: params[:errors],
      editUrl: edit_study_path
    }
  end

  def edit_study
    redirect_to study_detail_path name: params[:name]
  end
end
