require 'test_helper'

class MapObjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @map_object = map_objects(:one)
  end

  test "should get index" do
    get map_objects_url
    assert_response :success
  end

  test "should get new" do
    get new_map_object_url
    assert_response :success
  end

  test "should create map_object" do
    assert_difference('MapObject.count') do
      post map_objects_url, params: { map_object: { image: @map_object.image, name: @map_object.name, transparent: @map_object.transparent } }
    end

    assert_redirected_to map_object_url(MapObject.last)
  end

  test "should show map_object" do
    get map_object_url(@map_object)
    assert_response :success
  end

  test "should get edit" do
    get edit_map_object_url(@map_object)
    assert_response :success
  end

  test "should update map_object" do
    patch map_object_url(@map_object), params: { map_object: { image: @map_object.image, name: @map_object.name, transparent: @map_object.transparent } }
    assert_redirected_to map_object_url(@map_object)
  end

  test "should destroy map_object" do
    assert_difference('MapObject.count', -1) do
      delete map_object_url(@map_object)
    end

    assert_redirected_to map_objects_url
  end
end
