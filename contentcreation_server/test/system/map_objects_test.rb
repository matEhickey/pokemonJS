require "application_system_test_case"

class MapObjectsTest < ApplicationSystemTestCase
  setup do
    @map_object = map_objects(:one)
  end

  test "visiting the index" do
    visit map_objects_url
    assert_selector "h1", text: "Map Objects"
  end

  test "creating a Map object" do
    visit map_objects_url
    click_on "New Map Object"

    fill_in "Image", with: @map_object.image
    fill_in "Name", with: @map_object.name
    check "Transparent" if @map_object.transparent
    click_on "Create Map object"

    assert_text "Map object was successfully created"
    click_on "Back"
  end

  test "updating a Map object" do
    visit map_objects_url
    click_on "Edit", match: :first

    fill_in "Image", with: @map_object.image
    fill_in "Name", with: @map_object.name
    check "Transparent" if @map_object.transparent
    click_on "Update Map object"

    assert_text "Map object was successfully updated"
    click_on "Back"
  end

  test "destroying a Map object" do
    visit map_objects_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Map object was successfully destroyed"
  end
end
