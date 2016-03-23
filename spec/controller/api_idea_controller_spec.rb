require 'rails_helper'

RSpec.describe Api::V1::Ideas::IdeasController, type: :controller do
  fixtures :ideas

  it "#index" do
    get :index, format: :json
    ideas = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(ideas.count).to eq 3
  end

  it "#create" do
    post :create, postParams: {title: "Tay", body:"rulz", quality: "genius"}, format: :json
    JSON.parse(response.body)
    idea = Idea.last
    expect(response.status).to eq 201
    expect(Idea.all.count).to eq 4
    expect(idea.title).to eq "Tay"
    expect(idea.quality).to eq "genius"
  end

  it "#destroy" do
    idea = ideas(:one)
    delete :destroy, id: idea.id, format: :json

    expect(response.status).to eq 204
    expect(Idea.all.count).to eq 2
  end

  it "#update" do
    idea = ideas(:one)
    new_info = {title:"BOOM", body:"TNT"}
    put :update, id: idea.id, postParams: new_info, format: :json
    idea = Idea.first

    expect(response.status).to eq 204
    expect(Idea.all.count).to eq 3
    expect(idea.title).to eq "BOOM"
  end

end
