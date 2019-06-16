class MapObjectsController < ApplicationController
  before_action :set_map_object, only: [:show, :edit, :update, :destroy]

  # GET /map_objects
  # GET /map_objects.json
  def index
    @map_objects = MapObject.all
  end

  # GET /map_objects/1
  # GET /map_objects/1.json
  def show
  end

  # GET /map_objects/new
  def new
    @map_object = MapObject.new
  end

  # GET /map_objects/1/edit
  def edit
  end

  # POST /map_objects
  # POST /map_objects.json
  def create
    @map_object = MapObject.new(map_object_params)

    respond_to do |format|
      if @map_object.save
        format.html { redirect_to @map_object, notice: 'Map object was successfully created.' }
        format.json { render :show, status: :created, location: @map_object }
      else
        format.html { render :new }
        format.json { render json: @map_object.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /map_objects/1
  # PATCH/PUT /map_objects/1.json
  def update
    respond_to do |format|
      if @map_object.update(map_object_params)
        format.html { redirect_to @map_object, notice: 'Map object was successfully updated.' }
        format.json { render :show, status: :ok, location: @map_object }
      else
        format.html { render :edit }
        format.json { render json: @map_object.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /map_objects/1
  # DELETE /map_objects/1.json
  def destroy
    @map_object.destroy
    respond_to do |format|
      format.html { redirect_to map_objects_url, notice: 'Map object was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map_object
      @map_object = MapObject.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def map_object_params
      params.require(:map_object).permit(:name, :image, :transparent)
    end
end
