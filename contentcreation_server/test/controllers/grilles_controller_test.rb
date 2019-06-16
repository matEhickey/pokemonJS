require 'test_helper'

class GrillesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @grille = grilles(:one)
  end

  test "should get index" do
    get grilles_url
    assert_response :success
  end

  test "should get new" do
    get new_grille_url
    assert_response :success
  end

  test "should create grille" do
    assert_difference('Grille.count') do
      post grilles_url, params: { grille: { image: @grille.image, name: @grille.name } }
    end

    assert_redirected_to grille_url(Grille.last)
  end

  test "should show grille" do
    get grille_url(@grille)
    assert_response :success
  end

  test "should get edit" do
    get edit_grille_url(@grille)
    assert_response :success
  end

  test "should update grille" do
    patch grille_url(@grille), params: { grille: { image: @grille.image, name: @grille.name } }
    assert_redirected_to grille_url(@grille)
  end

  test "should destroy grille" do
    assert_difference('Grille.count', -1) do
      delete grille_url(@grille)
    end

    assert_redirected_to grilles_url
  end
end
